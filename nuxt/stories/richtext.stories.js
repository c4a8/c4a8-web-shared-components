export default {
  title: 'Docs/Richtext',
  component: {},
  decorators: [
    (story) => ({
      components: { story },
      template: `
        <div>
          <story />

          <div class="post-detail container">
            <div class="w-xl-80 mx-xl-auto">
              <article class="post h-entry">
                <div class="post-content e-content">
                  <main class="richtext">
                    <p>Wir alle möchten Sicherheitsvorfälle in der IT vermeiden und müssen daher unsere Angriffsfläche kennen und wo immer möglich reduzieren. Neben Tools wie Microsoft Defender Vulnerability Management sind reibungslose Prozesse im Applikation Management und im Schwachstellenmanagement besonders hilfreich.</p>
                    <p><img src="https://res.cloudinary.com/c4a8/image/upload/v1683885342/blog/pics/img-secure-score.jpg" alt="Secure Score"></p>
                    <p>Bei einem Blick auf das Microsoft 365 Defender Portal, insbesondere Defender for Endpoint, staunen viele über die gesammelten Daten zu vulnerablen Anwendungen und schwachen Konfigurationen. Wer kennt es nicht? Jeden Monat tauchen neue Update-Empfehlungen für Windows 10, Office und Google Chrome im Dashboard auf. Außerdem stehen rund 70 Empfehlungen für eine sichere Konfiguration von Endgeräten auf der Liste. Stellt sich die Frage, wie man den unzähligen Empfehlungen Herr werden kann und einen akzeptablen Exposure oder Secure Score erreicht. Was wäre ein akzeptabler Wert für ein Unternehmen und wie sollte man messen? Um diese Fragen zu beantworten, werfen wir zunächst einen Blick auf die verschiedenen Produkte und Scores.</p>
                    <h3 id="funktionen-im-microsoft-365-defender-portal">Funktionen im Microsoft 365 Defender Portal</h3>
                    <p>Im <a href="https://security.micosoft.com">Microsoft 365 Defender Portal</a> findet sich der allgemeine Secure Score, der alle Bereiche des M365 Tenants abdeckt, einschließlich Endgeräte, Identitäten, Daten und Anwendungen. Ein hoher Score signalisiert maximale Sicherheitskonfigurationen. Microsoft empfiehlt eine möglichst sichere Konfiguration der einzelnen Tools und vergleicht diese mit der aktuellen Tenant Konfiguration. Dabei verfügt jedes einzelne Defender Produkt über einen eigenen Score (beispielsweise Secure Score for Devices oder Identity Secure Score), der in den allgemeinen Secure Score einbezogen wird. Dieser steigt, sobald die von Microsoft empfohlenen Einstellungen korrekt umgesetzt oder durch Alternativen mitigiert worden sind.</p>
                    <h4 id="stärken-im-überblick">Stärken im Überblick</h4>
                    <ul><li>Kundenorientierung: glueckkanja ist darauf bedacht, seinen Kunden praktischen Nutzen zu bieten und unterstützt sie beispielsweise bei zeitaufwändigen Aufgaben wie der Verteilung und dem Management der Software-Zertifikate in der Cloud.</li><li>Klare Zielsetzung: Mit dem Anspruch, der führende Anbieter von Managed Services für Microsoft Workplace und Azure Datacenter im deutschen Mittelstand zu werden, hat sich glueckkanja ein klares Ziel gesetzt und verfolgt dieses konsequent.</li><li>Technik im Dienst der Kunden: Die Verwendung von Windows Platform und Windows Enterprise Clients mit den Funktionen für Collaboration und dem Schutz durch Microsoft 365 Defender ermöglicht es den Nutzer*innen, produktiv zu sein, wo immer sie arbeiten müssen.</li></ul>
                    <h3 id="Überwachung extern zugänglicher Systeme mit Microsoft Defender External Attack Surface Management">Überwachung extern zugänglicher Systeme mit Microsoft Defender External Attack Surface Management</h3>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                    <h3 id="über-dekra">Über DEKRA</h3>
                    <p>Alle headlines die mit dem Wort "Über", "About", "Fazit", "Conclusion" starten.</p>
                  </main>
                </div>
              </article>
            </div>
          </div>

        </div>
      `,
    }),
  ],
};

export const Richtext = {
  args: {},
};
