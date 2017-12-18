module.exports = MockBase => class MockPostings extends MockBase {
    mocks() {
        return {
            route: '/api/postings',
            responses: [
                {
                    response: {
                        type: 'json',
                        body: [
                            {title: 'IT System Engineer (80 % - 100 %)', description: 'In deiner Funktion betreust du ca. 70 Arbeitsplätze und verantwortest den unterbruchsfreien Betrieb der Serverumgebungen für die Softwareentwicklung'},
                            {title: 'IT System - und Netzwerk Engineer', description: 'Bei der Umsetzung von IT-Projekten, insbesondere im Netzwerk Bereich, realisieren Sie selbständig oder im Team gesamte Vorhaben.'},
                            {title: 'IT - Teamleader (w/m)', description: 'Teamleitung, Projektleitung, Prozesse sowie Automatisierung und Digitalisierung der IT'},
                            {title: 'Global IT Project Manager - IT Application or Infrastructure Services', description: 'What does the role involve? Together with the technical experts and in close cooperation with our business counterparts you will plan, design, and ...'}
                        ]
                    }
                }
            ]
        }
    }
};