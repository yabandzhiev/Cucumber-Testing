Feature: Тестване на запазването на час.


Scenario Outline: Запазване на невалиден час от служител
    Given Служителят натиска бутон за вход в системата
    And Отваря се попъп за избор на дата и час
    When Въведе невалидно дата и час "<date>"
    Then Показва се съобщението "Невалидна дата!"
    
  	Examples: 
      | date | 
      | 19-2-2 |    
      | 12-12-12-12-21 |
      | 21-1-1 |    


      Scenario Outline: Запазване на невалиден час от потребител
    Given Потребителят натиска бутон за вход в системата
    And Отваря се попъп за избор на дата и час
    When Въведе невалидно дата и час "<date>"
    Then Показва се съобщението "Невалидна дата!"
    
  	Examples: 
      | date | 
      | 19-2-2 |    
      | 12-12-12-12-21 |
      | 21-1-1 |   
      
      
      Scenario Outline: Запазване на валиден час от потребител
      Given Потребителят натиска бутон за вход в системата
      And Отваря се попъп за избор на дата и час
      When Въведе валидно дата и час "<date>"
      And Въведе валидно име "<name>"
      And Въведе валидно email "<email>"
      And Въведе валидно телефон "<telephone>"
      Then Показва се съобщението "Моля потвърдете от избраната от вас поща."
      
      Examples:
      | date |    			| name | 								| email |			| telephone |
      | 14-02-2020 | | Andrei Slabakov | | andrei@abv.bg |	| 0878213412 |
      | 12-02-2020 | | Georgi Bliznakov | | georgi@abv.bg |	| 0878789456 |
     	| 11-02-2020 | | Ivan Ivanov | | roshaviq@abv.bg |	| 0878789433 |
     	
     	
     	
        Scenario Outline: Запазване на невалидено име от потребител
      Given Потребителят натиска бутон за вход в системата
      And Отваря се попъп за избор на дата и час
      When Въведе валидно дата и час "<date>"
      And Въведе невалидно име "<name>"
      And Въведе валидно email "<email>"
      And Въведе валидно телефон "<telephone>"
      Then Показва се съобщението "Невалидно име!"
      
      Examples:
      | date |    			| name | 								| email |			| telephone |
      | 14-02-2020 | | Andrei Slabakov2 | | andrei@abv.bg |	| 0878213412 |
			| 15-02-2020 | | Aleks Andr2eev | | andreev@abv.bg |	| 0878212222 |
      
      
      
        Scenario Outline: Запазване на невалиден емаил от потребител
      Given Потребителят натиска бутон за вход в системата
      And Отваря се попъп за избор на дата и час
      When Въведе валидно дата и час "<date>"
      And Въведе валидно име "<name>"
      And Въведе невалидно email "<email>"
      And Въведе валидно телефон "<telephone>"
      Then Показва се съобщението "Невалиден email!"
      
      Examples:
      | date |    			| name | 								| email |			| telephone |
      | 14-02-2020 | | Andrei Slabakov | 			|  |					| 0878213412 |
      