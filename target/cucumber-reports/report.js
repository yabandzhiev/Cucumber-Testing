$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Appointment.feature");
formatter.feature({
  "line": 1,
  "name": "Тестване на запазването на час.",
  "description": "",
  "id": "тестване-на-запазването-на-час.",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Запазване на невалиден час от служител",
  "description": "",
  "id": "тестване-на-запазването-на-час.;запазване-на-невалиден-час-от-служител",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Служителят натиска бутон за вход в системата",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Отваря се попъп за избор на дата и час",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Въведе невалидно дата и час \"\u003cdate\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Показва се съобщението \"Невалидна дата!\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "тестване-на-запазването-на-час.;запазване-на-невалиден-час-от-служител;",
  "rows": [
    {
      "cells": [
        "date"
      ],
      "line": 11,
      "id": "тестване-на-запазването-на-час.;запазване-на-невалиден-час-от-служител;;1"
    },
    {
      "cells": [
        "19-2-2"
      ],
      "line": 12,
      "id": "тестване-на-запазването-на-час.;запазване-на-невалиден-час-от-служител;;2"
    },
    {
      "cells": [
        "12-12-12-12-21"
      ],
      "line": 13,
      "id": "тестване-на-запазването-на-час.;запазване-на-невалиден-час-от-служител;;3"
    },
    {
      "cells": [
        "21-1-1"
      ],
      "line": 14,
      "id": "тестване-на-запазването-на-час.;запазване-на-невалиден-час-от-служител;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "Запазване на невалиден час от служител",
  "description": "",
  "id": "тестване-на-запазването-на-час.;запазване-на-невалиден-час-от-служител;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Служителят натиска бутон за вход в системата",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Отваря се попъп за избор на дата и час",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Въведе невалидно дата и час \"19-2-2\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Показва се съобщението \"Невалидна дата!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "AppointmentSteps.Служителят_натиска_бутон_за_вход_в_системата()"
});
formatter.result({
  "duration": 64588200,
  "status": "passed"
});
formatter.match({
  "location": "AppointmentSteps.Oтваря_се_попъп_за_избор_на_дата_и_час()"
});
formatter.result({
  "duration": 1272800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "19-2-2",
      "offset": 29
    }
  ],
  "location": "AppointmentSteps.Въведе_невалидно_дата_и_час(String)"
});
formatter.result({
  "duration": 1541000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Невалидна дата!",
      "offset": 24
    }
  ],
  "location": "AppointmentSteps.показва_се_съобщението(String)"
});
formatter.result({
  "duration": 43300,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Запазване на невалиден час от служител",
  "description": "",
  "id": "тестване-на-запазването-на-час.;запазване-на-невалиден-час-от-служител;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Служителят натиска бутон за вход в системата",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Отваря се попъп за избор на дата и час",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Въведе невалидно дата и час \"12-12-12-12-21\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Показва се съобщението \"Невалидна дата!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "AppointmentSteps.Служителят_натиска_бутон_за_вход_в_системата()"
});
formatter.result({
  "duration": 20500,
  "status": "passed"
});
formatter.match({
  "location": "AppointmentSteps.Oтваря_се_попъп_за_избор_на_дата_и_час()"
});
formatter.result({
  "duration": 9700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12-12-12-12-21",
      "offset": 29
    }
  ],
  "location": "AppointmentSteps.Въведе_невалидно_дата_и_час(String)"
});
formatter.result({
  "duration": 35000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Невалидна дата!",
      "offset": 24
    }
  ],
  "location": "AppointmentSteps.показва_се_съобщението(String)"
});
formatter.result({
  "duration": 31900,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Запазване на невалиден час от служител",
  "description": "",
  "id": "тестване-на-запазването-на-час.;запазване-на-невалиден-час-от-служител;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Служителят натиска бутон за вход в системата",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Отваря се попъп за избор на дата и час",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Въведе невалидно дата и час \"21-1-1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Показва се съобщението \"Невалидна дата!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "AppointmentSteps.Служителят_натиска_бутон_за_вход_в_системата()"
});
formatter.result({
  "duration": 24000,
  "status": "passed"
});
formatter.match({
  "location": "AppointmentSteps.Oтваря_се_попъп_за_избор_на_дата_и_час()"
});
formatter.result({
  "duration": 12100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "21-1-1",
      "offset": 29
    }
  ],
  "location": "AppointmentSteps.Въведе_невалидно_дата_и_час(String)"
});
formatter.result({
  "duration": 37500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Невалидна дата!",
      "offset": 24
    }
  ],
  "location": "AppointmentSteps.показва_се_съобщението(String)"
});
formatter.result({
  "duration": 68800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "Запазване на невалиден час от потребител",
  "description": "",
  "id": "тестване-на-запазването-на-час.;запазване-на-невалиден-час-от-потребител",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "Потребителят натиска бутон за вход в системата",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "Отваря се попъп за избор на дата и час",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Въведе невалидно дата и час \"\u003cdate\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Показва се съобщението \"Невалидна дата!\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "тестване-на-запазването-на-час.;запазване-на-невалиден-час-от-потребител;",
  "rows": [
    {
      "cells": [
        "date"
      ],
      "line": 24,
      "id": "тестване-на-запазването-на-час.;запазване-на-невалиден-час-от-потребител;;1"
    },
    {
      "cells": [
        "19-2-2"
      ],
      "line": 25,
      "id": "тестване-на-запазването-на-час.;запазване-на-невалиден-час-от-потребител;;2"
    },
    {
      "cells": [
        "12-12-12-12-21"
      ],
      "line": 26,
      "id": "тестване-на-запазването-на-час.;запазване-на-невалиден-час-от-потребител;;3"
    },
    {
      "cells": [
        "21-1-1"
      ],
      "line": 27,
      "id": "тестване-на-запазването-на-час.;запазване-на-невалиден-час-от-потребител;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 25,
  "name": "Запазване на невалиден час от потребител",
  "description": "",
  "id": "тестване-на-запазването-на-час.;запазване-на-невалиден-час-от-потребител;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "Потребителят натиска бутон за вход в системата",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "Отваря се попъп за избор на дата и час",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Въведе невалидно дата и час \"19-2-2\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Показва се съобщението \"Невалидна дата!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "AppointmentSteps.потребителят_натиска_бутон_за_вход_в_системата()"
});
formatter.result({
  "duration": 27900,
  "status": "passed"
});
formatter.match({
  "location": "AppointmentSteps.Oтваря_се_попъп_за_избор_на_дата_и_час()"
});
formatter.result({
  "duration": 12000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "19-2-2",
      "offset": 29
    }
  ],
  "location": "AppointmentSteps.Въведе_невалидно_дата_и_час(String)"
});
formatter.result({
  "duration": 38100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Невалидна дата!",
      "offset": 24
    }
  ],
  "location": "AppointmentSteps.показва_се_съобщението(String)"
});
formatter.result({
  "duration": 38600,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Запазване на невалиден час от потребител",
  "description": "",
  "id": "тестване-на-запазването-на-час.;запазване-на-невалиден-час-от-потребител;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "Потребителят натиска бутон за вход в системата",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "Отваря се попъп за избор на дата и час",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Въведе невалидно дата и час \"12-12-12-12-21\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Показва се съобщението \"Невалидна дата!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "AppointmentSteps.потребителят_натиска_бутон_за_вход_в_системата()"
});
formatter.result({
  "duration": 22700,
  "status": "passed"
});
formatter.match({
  "location": "AppointmentSteps.Oтваря_се_попъп_за_избор_на_дата_и_час()"
});
formatter.result({
  "duration": 11300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12-12-12-12-21",
      "offset": 29
    }
  ],
  "location": "AppointmentSteps.Въведе_невалидно_дата_и_час(String)"
});
formatter.result({
  "duration": 38600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Невалидна дата!",
      "offset": 24
    }
  ],
  "location": "AppointmentSteps.показва_се_съобщението(String)"
});
formatter.result({
  "duration": 29000,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Запазване на невалиден час от потребител",
  "description": "",
  "id": "тестване-на-запазването-на-час.;запазване-на-невалиден-час-от-потребител;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "Потребителят натиска бутон за вход в системата",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "Отваря се попъп за избор на дата и час",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Въведе невалидно дата и час \"21-1-1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Показва се съобщението \"Невалидна дата!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "AppointmentSteps.потребителят_натиска_бутон_за_вход_в_системата()"
});
formatter.result({
  "duration": 23100,
  "status": "passed"
});
formatter.match({
  "location": "AppointmentSteps.Oтваря_се_попъп_за_избор_на_дата_и_час()"
});
formatter.result({
  "duration": 9700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "21-1-1",
      "offset": 29
    }
  ],
  "location": "AppointmentSteps.Въведе_невалидно_дата_и_час(String)"
});
formatter.result({
  "duration": 32900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Невалидна дата!",
      "offset": 24
    }
  ],
  "location": "AppointmentSteps.показва_се_съобщението(String)"
});
formatter.result({
  "duration": 32300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 30,
  "name": "Запазване на валиден час от потребител",
  "description": "",
  "id": "тестване-на-запазването-на-час.;запазване-на-валиден-час-от-потребител",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 31,
  "name": "Потребителят натиска бутон за вход в системата",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "Отваря се попъп за избор на дата и час",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Въведе валидно дата и час \"\u003cdate\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "Въведе валидно име \"\u003cname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Въведе валидно email \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Въведе валидно телефон \"\u003ctelephone\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Показва се съобщението \"Моля потвърдете от избраната от вас поща.\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 39,
  "name": "",
  "description": "",
  "id": "тестване-на-запазването-на-час.;запазване-на-валиден-час-от-потребител;",
  "rows": [
    {
      "cells": [
        "date",
        "",
        "name",
        "",
        "email",
        "",
        "telephone"
      ],
      "line": 40,
      "id": "тестване-на-запазването-на-час.;запазване-на-валиден-час-от-потребител;;1"
    },
    {
      "cells": [
        "14-02-2020",
        "",
        "Andrei Slabakov",
        "",
        "andrei@abv.bg",
        "",
        "0878213412"
      ],
      "line": 41,
      "id": "тестване-на-запазването-на-час.;запазване-на-валиден-час-от-потребител;;2"
    },
    {
      "cells": [
        "12-02-2020",
        "",
        "Georgi Bliznakov",
        "",
        "georgi@abv.bg",
        "",
        "0878789456"
      ],
      "line": 42,
      "id": "тестване-на-запазването-на-час.;запазване-на-валиден-час-от-потребител;;3"
    },
    {
      "cells": [
        "11-02-2020",
        "",
        "Ivan Ivanov",
        "",
        "roshaviq@abv.bg",
        "",
        "0878789433"
      ],
      "line": 43,
      "id": "тестване-на-запазването-на-час.;запазване-на-валиден-час-от-потребител;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 41,
  "name": "Запазване на валиден час от потребител",
  "description": "",
  "id": "тестване-на-запазването-на-час.;запазване-на-валиден-час-от-потребител;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 31,
  "name": "Потребителят натиска бутон за вход в системата",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "Отваря се попъп за избор на дата и час",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Въведе валидно дата и час \"14-02-2020\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "Въведе валидно име \"Andrei Slabakov\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Въведе валидно email \"andrei@abv.bg\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Въведе валидно телефон \"0878213412\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Показва се съобщението \"Моля потвърдете от избраната от вас поща.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "AppointmentSteps.потребителят_натиска_бутон_за_вход_в_системата()"
});
formatter.result({
  "duration": 24300,
  "status": "passed"
});
formatter.match({
  "location": "AppointmentSteps.Oтваря_се_попъп_за_избор_на_дата_и_час()"
});
formatter.result({
  "duration": 9900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "14-02-2020",
      "offset": 27
    }
  ],
  "location": "AppointmentSteps.въведе_валидно_дата_и_час(String)"
});
formatter.result({
  "duration": 45100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Andrei Slabakov",
      "offset": 20
    }
  ],
  "location": "AppointmentSteps.въведе_валидно_име(String)"
});
formatter.result({
  "duration": 49700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "andrei@abv.bg",
      "offset": 22
    }
  ],
  "location": "AppointmentSteps.въведе_валидно_email(String)"
});
formatter.result({
  "duration": 37900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0878213412",
      "offset": 24
    }
  ],
  "location": "AppointmentSteps.въведе_валидно_телефон(String)"
});
formatter.result({
  "duration": 30600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Моля потвърдете от избраната от вас поща.",
      "offset": 24
    }
  ],
  "location": "AppointmentSteps.показва_се_съобщението(String)"
});
formatter.result({
  "duration": 25100,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Запазване на валиден час от потребител",
  "description": "",
  "id": "тестване-на-запазването-на-час.;запазване-на-валиден-час-от-потребител;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 31,
  "name": "Потребителят натиска бутон за вход в системата",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "Отваря се попъп за избор на дата и час",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Въведе валидно дата и час \"12-02-2020\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "Въведе валидно име \"Georgi Bliznakov\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Въведе валидно email \"georgi@abv.bg\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Въведе валидно телефон \"0878789456\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Показва се съобщението \"Моля потвърдете от избраната от вас поща.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "AppointmentSteps.потребителят_натиска_бутон_за_вход_в_системата()"
});
formatter.result({
  "duration": 31300,
  "status": "passed"
});
formatter.match({
  "location": "AppointmentSteps.Oтваря_се_попъп_за_избор_на_дата_и_час()"
});
formatter.result({
  "duration": 19200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12-02-2020",
      "offset": 27
    }
  ],
  "location": "AppointmentSteps.въведе_валидно_дата_и_час(String)"
});
formatter.result({
  "duration": 37900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Georgi Bliznakov",
      "offset": 20
    }
  ],
  "location": "AppointmentSteps.въведе_валидно_име(String)"
});
formatter.result({
  "duration": 37500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "georgi@abv.bg",
      "offset": 22
    }
  ],
  "location": "AppointmentSteps.въведе_валидно_email(String)"
});
formatter.result({
  "duration": 29600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0878789456",
      "offset": 24
    }
  ],
  "location": "AppointmentSteps.въведе_валидно_телефон(String)"
});
formatter.result({
  "duration": 40200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Моля потвърдете от избраната от вас поща.",
      "offset": 24
    }
  ],
  "location": "AppointmentSteps.показва_се_съобщението(String)"
});
formatter.result({
  "duration": 24100,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Запазване на валиден час от потребител",
  "description": "",
  "id": "тестване-на-запазването-на-час.;запазване-на-валиден-час-от-потребител;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 31,
  "name": "Потребителят натиска бутон за вход в системата",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "Отваря се попъп за избор на дата и час",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Въведе валидно дата и час \"11-02-2020\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "Въведе валидно име \"Ivan Ivanov\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Въведе валидно email \"roshaviq@abv.bg\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Въведе валидно телефон \"0878789433\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Показва се съобщението \"Моля потвърдете от избраната от вас поща.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "AppointmentSteps.потребителят_натиска_бутон_за_вход_в_системата()"
});
formatter.result({
  "duration": 26100,
  "status": "passed"
});
formatter.match({
  "location": "AppointmentSteps.Oтваря_се_попъп_за_избор_на_дата_и_час()"
});
formatter.result({
  "duration": 10500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11-02-2020",
      "offset": 27
    }
  ],
  "location": "AppointmentSteps.въведе_валидно_дата_и_час(String)"
});
formatter.result({
  "duration": 34200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ivan Ivanov",
      "offset": 20
    }
  ],
  "location": "AppointmentSteps.въведе_валидно_име(String)"
});
formatter.result({
  "duration": 70800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "roshaviq@abv.bg",
      "offset": 22
    }
  ],
  "location": "AppointmentSteps.въведе_валидно_email(String)"
});
formatter.result({
  "duration": 27300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0878789433",
      "offset": 24
    }
  ],
  "location": "AppointmentSteps.въведе_валидно_телефон(String)"
});
formatter.result({
  "duration": 24600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Моля потвърдете от избраната от вас поща.",
      "offset": 24
    }
  ],
  "location": "AppointmentSteps.показва_се_съобщението(String)"
});
formatter.result({
  "duration": 29300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 47,
  "name": "Запазване на невалидено име от потребител",
  "description": "",
  "id": "тестване-на-запазването-на-час.;запазване-на-невалидено-име-от-потребител",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 48,
  "name": "Потребителят натиска бутон за вход в системата",
  "keyword": "Given "
});
formatter.step({
  "line": 49,
  "name": "Отваря се попъп за избор на дата и час",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "Въведе валидно дата и час \"\u003cdate\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "Въведе невалидно име \"\u003cname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "Въведе валидно email \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "Въведе валидно телефон \"\u003ctelephone\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "Показва се съобщението \"Невалидно име!\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 56,
  "name": "",
  "description": "",
  "id": "тестване-на-запазването-на-час.;запазване-на-невалидено-име-от-потребител;",
  "rows": [
    {
      "cells": [
        "date",
        "",
        "name",
        "",
        "email",
        "",
        "telephone"
      ],
      "line": 57,
      "id": "тестване-на-запазването-на-час.;запазване-на-невалидено-име-от-потребител;;1"
    },
    {
      "cells": [
        "14-02-2020",
        "",
        "Andrei Slabakov2",
        "",
        "andrei@abv.bg",
        "",
        "0878213412"
      ],
      "line": 58,
      "id": "тестване-на-запазването-на-час.;запазване-на-невалидено-име-от-потребител;;2"
    },
    {
      "cells": [
        "15-02-2020",
        "",
        "Aleks Andr2eev",
        "",
        "andreev@abv.bg",
        "",
        "0878212222"
      ],
      "line": 59,
      "id": "тестване-на-запазването-на-час.;запазване-на-невалидено-име-от-потребител;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 58,
  "name": "Запазване на невалидено име от потребител",
  "description": "",
  "id": "тестване-на-запазването-на-час.;запазване-на-невалидено-име-от-потребител;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 48,
  "name": "Потребителят натиска бутон за вход в системата",
  "keyword": "Given "
});
formatter.step({
  "line": 49,
  "name": "Отваря се попъп за избор на дата и час",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "Въведе валидно дата и час \"14-02-2020\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "Въведе невалидно име \"Andrei Slabakov2\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "Въведе валидно email \"andrei@abv.bg\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "Въведе валидно телефон \"0878213412\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "Показва се съобщението \"Невалидно име!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "AppointmentSteps.потребителят_натиска_бутон_за_вход_в_системата()"
});
formatter.result({
  "duration": 29100,
  "status": "passed"
});
formatter.match({
  "location": "AppointmentSteps.Oтваря_се_попъп_за_избор_на_дата_и_час()"
});
formatter.result({
  "duration": 10400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "14-02-2020",
      "offset": 27
    }
  ],
  "location": "AppointmentSteps.въведе_валидно_дата_и_час(String)"
});
formatter.result({
  "duration": 34000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Andrei Slabakov2",
      "offset": 22
    }
  ],
  "location": "AppointmentSteps.невъведе_валидно_име(String)"
});
formatter.result({
  "duration": 88100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "andrei@abv.bg",
      "offset": 22
    }
  ],
  "location": "AppointmentSteps.въведе_валидно_email(String)"
});
formatter.result({
  "duration": 31400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0878213412",
      "offset": 24
    }
  ],
  "location": "AppointmentSteps.въведе_валидно_телефон(String)"
});
formatter.result({
  "duration": 30300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Невалидно име!",
      "offset": 24
    }
  ],
  "location": "AppointmentSteps.показва_се_съобщението(String)"
});
formatter.result({
  "duration": 24200,
  "status": "passed"
});
formatter.scenario({
  "line": 59,
  "name": "Запазване на невалидено име от потребител",
  "description": "",
  "id": "тестване-на-запазването-на-час.;запазване-на-невалидено-име-от-потребител;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 48,
  "name": "Потребителят натиска бутон за вход в системата",
  "keyword": "Given "
});
formatter.step({
  "line": 49,
  "name": "Отваря се попъп за избор на дата и час",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "Въведе валидно дата и час \"15-02-2020\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "Въведе невалидно име \"Aleks Andr2eev\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "Въведе валидно email \"andreev@abv.bg\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "Въведе валидно телефон \"0878212222\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "Показва се съобщението \"Невалидно име!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "AppointmentSteps.потребителят_натиска_бутон_за_вход_в_системата()"
});
formatter.result({
  "duration": 23300,
  "status": "passed"
});
formatter.match({
  "location": "AppointmentSteps.Oтваря_се_попъп_за_избор_на_дата_и_час()"
});
formatter.result({
  "duration": 11100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15-02-2020",
      "offset": 27
    }
  ],
  "location": "AppointmentSteps.въведе_валидно_дата_и_час(String)"
});
formatter.result({
  "duration": 35500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Aleks Andr2eev",
      "offset": 22
    }
  ],
  "location": "AppointmentSteps.невъведе_валидно_име(String)"
});
formatter.result({
  "duration": 78300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "andreev@abv.bg",
      "offset": 22
    }
  ],
  "location": "AppointmentSteps.въведе_валидно_email(String)"
});
formatter.result({
  "duration": 26800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0878212222",
      "offset": 24
    }
  ],
  "location": "AppointmentSteps.въведе_валидно_телефон(String)"
});
formatter.result({
  "duration": 25100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Невалидно име!",
      "offset": 24
    }
  ],
  "location": "AppointmentSteps.показва_се_съобщението(String)"
});
formatter.result({
  "duration": 23000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 63,
  "name": "Запазване на невалиден емаил от потребител",
  "description": "",
  "id": "тестване-на-запазването-на-час.;запазване-на-невалиден-емаил-от-потребител",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 64,
  "name": "Потребителят натиска бутон за вход в системата",
  "keyword": "Given "
});
formatter.step({
  "line": 65,
  "name": "Отваря се попъп за избор на дата и час",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "Въведе валидно дата и час \"\u003cdate\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 67,
  "name": "Въведе валидно име \"\u003cname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "Въведе невалидно email \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "Въведе валидно телефон \"\u003ctelephone\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "Показва се съобщението \"Невалиден email!\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 72,
  "name": "",
  "description": "",
  "id": "тестване-на-запазването-на-час.;запазване-на-невалиден-емаил-от-потребител;",
  "rows": [
    {
      "cells": [
        "date",
        "",
        "name",
        "",
        "email",
        "",
        "telephone"
      ],
      "line": 73,
      "id": "тестване-на-запазването-на-час.;запазване-на-невалиден-емаил-от-потребител;;1"
    },
    {
      "cells": [
        "14-02-2020",
        "",
        "Andrei Slabakov",
        "",
        "",
        "",
        "0878213412"
      ],
      "line": 74,
      "id": "тестване-на-запазването-на-час.;запазване-на-невалиден-емаил-от-потребител;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 74,
  "name": "Запазване на невалиден емаил от потребител",
  "description": "",
  "id": "тестване-на-запазването-на-час.;запазване-на-невалиден-емаил-от-потребител;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 64,
  "name": "Потребителят натиска бутон за вход в системата",
  "keyword": "Given "
});
formatter.step({
  "line": 65,
  "name": "Отваря се попъп за избор на дата и час",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "Въведе валидно дата и час \"14-02-2020\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 67,
  "name": "Въведе валидно име \"Andrei Slabakov\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "Въведе невалидно email \"\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "Въведе валидно телефон \"0878213412\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "Показва се съобщението \"Невалиден email!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "AppointmentSteps.потребителят_натиска_бутон_за_вход_в_системата()"
});
formatter.result({
  "duration": 32400,
  "status": "passed"
});
formatter.match({
  "location": "AppointmentSteps.Oтваря_се_попъп_за_избор_на_дата_и_час()"
});
formatter.result({
  "duration": 14800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "14-02-2020",
      "offset": 27
    }
  ],
  "location": "AppointmentSteps.въведе_валидно_дата_и_час(String)"
});
formatter.result({
  "duration": 45000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Andrei Slabakov",
      "offset": 20
    }
  ],
  "location": "AppointmentSteps.въведе_валидно_име(String)"
});
formatter.result({
  "duration": 34900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 24
    }
  ],
  "location": "AppointmentSteps.въведе_невалидно_email(String)"
});
formatter.result({
  "duration": 39000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0878213412",
      "offset": 24
    }
  ],
  "location": "AppointmentSteps.въведе_валидно_телефон(String)"
});
formatter.result({
  "duration": 24500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Невалиден email!",
      "offset": 24
    }
  ],
  "location": "AppointmentSteps.показва_се_съобщението(String)"
});
formatter.result({
  "duration": 35500,
  "status": "passed"
});
formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login feature",
  "description": "За да се разбере дали системата се позлва от слижутел е необходимо служителя\nда се логне с предварително регистриран профил",
  "id": "login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "Влизане в системата с валидни потребителски данни",
  "description": "",
  "id": "login-feature;влизане-в-системата-с-валидни-потребителски-данни",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "Потребителя се намира на начален екран",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Натиска бутон за вход в системата",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Отваря се попъп за вход в системата",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Въведе валидно потребителско име",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "въведе валидна парола",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Натисне на бутона за вход в системата",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Показва се съобщение \"Влязохте в системата\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.потребителя_се_намира_на_начален_екран()"
});
formatter.result({
  "duration": 367200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.натиска_бутон_за_вход_в_системата()"
});
formatter.result({
  "duration": 291300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.отваря_се_попъп_за_вход_в_системата()"
});
formatter.result({
  "duration": 17800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.въведе_валидно_потребителско_име()"
});
formatter.result({
  "duration": 18700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.въведе_валидна_парола()"
});
formatter.result({
  "duration": 14600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.натисне_на_бутона_за_вход_в_системата()"
});
formatter.result({
  "duration": 35227700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Влязохте в системата",
      "offset": 22
    }
  ],
  "location": "LoginSteps.показва_се_съобщение(String)"
});
formatter.result({
  "duration": 89600,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Влизане в системата с невалидни потребителски данни",
  "description": "",
  "id": "login-feature;влизане-в-системата-с-невалидни-потребителски-данни",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "Потребителя се намира на начален екран",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "Натиска бутон за вход в системата",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Отваря се попъп за вход в системата",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Въведе невалидно потребителско име",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "въведе невалидна парола",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Натисне на бутона за вход в системата",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Показва се съобщение \"Грешни данни\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.потребителя_се_намира_на_начален_екран()"
});
formatter.result({
  "duration": 24000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.натиска_бутон_за_вход_в_системата()"
});
formatter.result({
  "duration": 10400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.отваря_се_попъп_за_вход_в_системата()"
});
formatter.result({
  "duration": 10000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.въведе_невалидно_потребителско_име()"
});
formatter.result({
  "duration": 15100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.въведе_невалидна_парола()"
});
formatter.result({
  "duration": 13200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.натисне_на_бутона_за_вход_в_системата()"
});
formatter.result({
  "duration": 30200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Грешни данни",
      "offset": 22
    }
  ],
  "location": "LoginSteps.показва_се_съобщение(String)"
});
formatter.result({
  "duration": 33600,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Влизане в системата само с парола",
  "description": "",
  "id": "login-feature;влизане-в-системата-само-с-парола",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 24,
  "name": "Потребителя се намира на начален екран",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "Натиска бутон за вход в системата",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Отваря се попъп за вход в системата",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "въведе валидна парола",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "Натисне на бутона за вход в системата",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Показва се съобщение \"Попълнете всички задължителни полета\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.потребителя_се_намира_на_начален_екран()"
});
formatter.result({
  "duration": 20700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.натиска_бутон_за_вход_в_системата()"
});
formatter.result({
  "duration": 8900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.отваря_се_попъп_за_вход_в_системата()"
});
formatter.result({
  "duration": 8700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.въведе_валидна_парола()"
});
formatter.result({
  "duration": 8200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.натисне_на_бутона_за_вход_в_системата()"
});
formatter.result({
  "duration": 12400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Попълнете всички задължителни полета",
      "offset": 22
    }
  ],
  "location": "LoginSteps.показва_се_съобщение(String)"
});
formatter.result({
  "duration": 46800,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Влизане в системата само с потребителско име",
  "description": "",
  "id": "login-feature;влизане-в-системата-само-с-потребителско-име",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 32,
  "name": "Потребителя се намира на начален екран",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "Натиска бутон за вход в системата",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Отваря се попъп за вход в системата",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Въведе валидно потребителско име",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "Натисне на бутона за вход в системата",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Показва се съобщение \"Попълнете всички задължителни полета\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.потребителя_се_намира_на_начален_екран()"
});
formatter.result({
  "duration": 26700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.натиска_бутон_за_вход_в_системата()"
});
formatter.result({
  "duration": 8800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.отваря_се_попъп_за_вход_в_системата()"
});
formatter.result({
  "duration": 9400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.въведе_валидно_потребителско_име()"
});
formatter.result({
  "duration": 7800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.натисне_на_бутона_за_вход_в_системата()"
});
formatter.result({
  "duration": 8100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Попълнете всички задължителни полета",
      "offset": 22
    }
  ],
  "location": "LoginSteps.показва_се_съобщение(String)"
});
formatter.result({
  "duration": 36000,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Влизане в системата без потребителско име и парола",
  "description": "",
  "id": "login-feature;влизане-в-системата-без-потребителско-име-и-парола",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 40,
  "name": "Потребителя се намира на начален екран",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "Натиска бутон за вход в системата",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Отваря се попъп за вход в системата",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "Натисне на бутона за вход в системата",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "Показва се съобщение \"Попълнете всички задължителни полета\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.потребителя_се_намира_на_начален_екран()"
});
formatter.result({
  "duration": 25200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.натиска_бутон_за_вход_в_системата()"
});
formatter.result({
  "duration": 9700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.отваря_се_попъп_за_вход_в_системата()"
});
formatter.result({
  "duration": 15300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.натисне_на_бутона_за_вход_в_системата()"
});
formatter.result({
  "duration": 8900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Попълнете всички задължителни полета",
      "offset": 22
    }
  ],
  "location": "LoginSteps.показва_се_съобщение(String)"
});
formatter.result({
  "duration": 38100,
  "status": "passed"
});
});