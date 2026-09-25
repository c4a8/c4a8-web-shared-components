---
name: release
description: Cut a new release of c4a8-web-shared-components using git flow — create the release/x.x.x branch off develop, update CHANGELOG.md, rebuild the module (npm run update), bump the patch version (npm run patch), wait for the user's local site check, then commit. Use when the user asks to "release", "cut a release", "make a new version", "start a release branch", or "prepare release x.x.x".
---

# Release

This repo releases via **git flow**. The `git-flow` binary is **not installed** — use plain
git commands. The branch names and prefixes come from `.git/config` (`release/`, `develop`,
`master`).

The version lives in the **root** `package.json` (currently the only source of truth).
`nuxt/package.json` has no version field — its `patch`/`new-version` scripts `cd ..` and bump
the root one.

## Steps

Work through these in order. Do not skip ahead and do not batch step 5 with anything after it.

### 1. Start on develop, clean and current

```bash
git status --short
git rev-parse --abbrev-ref HEAD
```

- Must be on `develop` with a clean working tree. If there are stray changes, stop and ask.
- Pull first: `git pull --ff-only origin develop`
- If the user is already on a `release/x.x.x` branch, skip to the step they still need
  (usually the CHANGELOG or the build) rather than creating a second branch.

### 2. Determine the next version and create the release branch

Read the current version from the root `package.json` and increment the **patch** segment.
Example: `0.4.108` → next release is `0.4.109`.

```bash
git checkout -b release/0.4.109 develop
```

State the version you picked before creating the branch. If the user wants a minor bump
instead, the branch name changes accordingly and step 4 uses `npm run new-version` rather
than `npm run patch`.

### 3. Update CHANGELOG.md

Newest release goes at the very top, directly under the `# Releases` heading:

```markdown
# Releases

# Release 0.4.109

- Short sentence describing what changed

# Release 0.4.108
...
```

Rules that match the existing file:

- Heading is `# Release x.x.x` (h1, same level as `# Releases`), blank line after it.
- Bullets are short, present tense, user-facing: "Fixes issue with duplicate id's",
  "Adds performance improvements to increase lighthouse score". One or a few bullets.
- Some releases have no bullets at all — that's acceptable, but prefer at least one.
- Do **not** renumber or reword older entries.

To write the bullets, look at what landed on develop since the last release commit:

```bash
git log --oneline $(git log -1 --format=%H --grep="chore(release)")..HEAD
```

Summarize by outcome, not by commit. Show the proposed entry to the user before moving on.

### 4. Rebuild the module and bump the version

Both from the `nuxt` directory, in this order:

```bash
cd nuxt && npm run update
cd nuxt && npm run patch
```

- `npm run update` = `module:build` + `move-module.js` — rebuilds the module and moves the
  output into `dist/`. This regenerates files under `dist/runtime/**`, so expect a large diff.
- `npm run patch` = `cd .. && npm version patch --no-git-tag-version` — bumps the root
  `package.json` and `package-lock.json`. No tag is created here; git flow handles tagging.

Afterwards confirm the version in the root `package.json` matches the release branch name.

### 5. Ask the user to verify locally — then stop and wait

Ask explicitly:

> Have you tested this build in your local sites with `npm run relink`?

**Do not commit until the user confirms.** If they report problems, fix them on the release
branch and re-run step 4 before asking again.

### 6. Commit

One single-line commit message, matching the rest of the history:

```
chore(release): 0.4.109
```

No body, no bullet list, no "Generated with" block. A `Co-Authored-By:` trailer is fine.

```bash
git add -A
git commit -m "chore(release): 0.4.109" -m "Co-Authored-By: Claude Opus 5 (1M context) <noreply@anthropic.com>"
```

Include the regenerated `dist/` files, `CHANGELOG.md`, `package.json` and
`package-lock.json` — prior release commits carry all of them.

### 7. Hand back to the user

The user pushes and finishes the release themselves. Tell them the branch is ready and stop
there — do not push and do not merge on your own.

If they ask for help finishing it, the equivalent of `git flow release finish` without the
binary is:

```bash
git push -u origin release/0.4.109

git checkout master && git pull --ff-only origin master
git merge --no-ff release/0.4.109 -m "Merge branch 'release/0.4.109'"
git tag 0.4.109                      # versiontag prefix is empty in .git/config

git checkout develop && git pull --ff-only origin develop
git merge --no-ff release/0.4.109 -m "Merge branch 'release/0.4.109' into develop"

git push origin master develop --tags
git branch -d release/0.4.109
```

Confirm with the user before running any of those — pushing to `master` and tagging are
outward-facing and irreversible.

## Notes

- Never bump the version by editing `package.json` by hand; always use the npm scripts so the
  lockfile stays in sync.
- A `chore(release): update` commit exists in history (a rebuild without a version bump) —
  that's the hotfix path, not this one.
