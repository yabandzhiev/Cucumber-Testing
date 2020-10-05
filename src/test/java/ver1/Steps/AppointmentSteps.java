package ver1.Steps;

import static org.junit.Assert.assertEquals;

import static org.junit.Assert.assertTrue;



import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import ui.models.AppointmentScreen;





public class AppointmentSteps {

	
		AppointmentScreen screen= new AppointmentScreen();
	
		

		@Given("^Служителят натиска бутон за вход в системата$")
		public void Служителят_натиска_бутон_за_вход_в_системата() throws Throwable {
			screen.clickOpenButton();
		    
		}
		
		@Given("^Потребителят натиска бутон за вход в системата$")
		public void потребителят_натиска_бутон_за_вход_в_системата() throws Throwable {
			screen.clickOpenButton();
		}

		
		@Given("^Отваря се попъп за избор на дата и час$")
		public void Oтваря_се_попъп_за_избор_на_дата_и_час() throws Throwable {
				assertTrue(screen.isFormVisible());
			
		}

		@When("^Въведе невалидно дата и час \"([^\"]*)\"$")
		public void Въведе_невалидно_дата_и_час(String date) throws Throwable {
			screen.addChosenDate(date);
		    
		}
   

		@When("^Въведе валидно дата и час \"([^\"]*)\"$")
		public void въведе_валидно_дата_и_час(String date) throws Throwable {
		   screen.addChosenDate(date);
		   
		}
		
		@When("^Въведе валидно име \"([^\"]*)\"$")
		public void въведе_валидно_име(String name) throws Throwable {
		    screen.addChosenName(name);
		}
		
		@When("^Въведе валидно email \"([^\"]*)\"$")
		public void въведе_валидно_email(String email) throws Throwable {
		    screen.addChosenEmail(email);
		}
		
		@When("^Въведе валидно телефон \"([^\"]*)\"$")
		public void въведе_валидно_телефон(String telephone) throws Throwable {
		    screen.addChosenTelephone(telephone);
		}
		
		
		@Then("^Показва се съобщението \"([^\"]*)\"$")
		public void показва_се_съобщението(String expectedMessage) throws Throwable {
			assertEquals(expectedMessage, screen.getStateMessage());
		    
		}
		
		@When("^Въведе невалидно име \"([^\"]*)\"$")
		public void невъведе_валидно_име(String name) throws Throwable {
		    screen.addChosenName(name);
		}
		
		@When("^Въведе невалидно email \"([^\"]*)\"$")
		public void въведе_невалидно_email(String email) throws Throwable {
		    screen.addChosenEmail(email);
		}

}

		

	

