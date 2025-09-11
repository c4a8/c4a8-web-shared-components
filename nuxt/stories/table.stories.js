import TableComponent from "../components/v-table.vue";

export default {
    title: 'Components/Table',
    component: TableComponent,
    argTypes: {
    },
};

export const Table = {
    args: {
        head: "true",
        hideContainer: "true",
        table: [
            [
                "header1", "header2"
            ],
            [
                "data1", "data2"
            ],
        ],
    }
 }

 export const Agenda = {
    args: {
        agenda: "true",
        headline: "Event-Agenda",
        head: "true",
        HideContainer: "true",
        table: [
            {
                timeFrom: "09:00",
                timeTo: "09:30",
                title: "Einlass & Warm-Up inkl. Frühstück"
            },
            {
                timeFrom: "09:30",
                timeTo: "09:45",
                title: "Begrüßung & Einführung"
            },
            {
                timeFrom: "09:45",
                timeTo: "10:30",
                title: "Microsoft Session: Hot News zum Windows-Cloud PC (App Streaming & KI)",
                speaker: "Klaus Harrer-Nemecek, Endpoint Solution Engineer (Microsoft)",
                highlight: true,
                description: "Ich bin ein kleiner Blindtext. Und zwar schon so lange ich denken kann. Es war nicht leicht zu verstehen, was es bedeutet, ein blinder Text zu sein: Man ergibt keinen Sinn. Wirklich keinen Sinn. Man wird zusammenhangslos eingeschoben und rumgedreht – und oftmals gar nicht erst gelesen. Aber bin ich allein deshalb ein schlechterer Text als andere? Na gut, ich werde nie in den Bestsellerlisten stehen. Aber andere Texte schaffen das auch nicht. Und darum stört es mich nicht besonders blind zu sein. Und sollten Sie diese Zeilen noch immer lesen, so habe ich als kleiner Blindtext etwas geschafft, wovon all die richtigen und wichtigen Texte meist nur träumen."
            },
            {
                timeFrom: "10:30",
                timeTo: "11:30",
                title: "Windows 365 & Link vs. Azure Virtual Desktop",
                speaker: "Timo Herzig, Cloud Architect",
                description: "Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen Sie in Buchstabhausen an der Küste des Semantik, eines großen Sprachozeans. Ein kleines Bächlein namens Duden fließt durch ihren Ort und versorgt sie mit den nötigen Regelialien. Es ist ein paradiesmatisches Land, in dem einem gebratene Satzteile in den Mund fliegen. Nicht einmal von der allmächtigen Interpunktion werden die Blindtexte beherrscht – ein geradezu unorthographisches Leben."
            },
            {
                timeFrom: "ab 11:30",
                to: "12:30",
                title: "Mittagspause"
            },
            {
                timeFrom: "12:30",
                timeTo: "13:30",
                title: "Microsoft Lizenz Wrap-Up & Azure FinOps",
                speaker: "Lukas Schneider, Head of Business Development & Alliances, John-Cian Maier, Sales Manager (Seidl Software)",
                highlight: true,
                description: "Das Layout ist fertig, der Text lässt auf sich warten. Damit das Layout nun nicht nackt im Raume steht und sich klein und leer vorkommt, springe ich ein: der Blindtext."
            },
            {
                timeFrom: "13:30",
                timeTo: "14:30",
                title: "Microsoft 365 Copilot Control System",
                speaker: "Christoph Wilfing, CEO & Microsoft MVP (atwork)",
                highlight: true,
            },
            {
                timeFrom: "14:30",
                timeTo: "15:30",
                title: "Modern Client Management at Scale (Evergreen Approach)",
                speaker: "Alexander Schlindwein, Managed Services Lead"
            },
            {
                timeFrom: "ab 15:30",
                title: "Abschluss & Apéro",
                description: "Lass den Tag mit entspannten Gesprächen, Networking und Getränken ausklingen."
            }
        ],
    }
 }

