package ver1.Steps;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import ui.models.HomeScreen;
import ui.models.LoginForm;


public class LoginSteps {
	

	private HomeScreen homeScreen;
	private LoginForm loginForm;
	
	@Given("^Потребителя се намира на начален екран$")
	public void потребителя_се_намира_на_начален_екран() throws Throwable {
		homeScreen= new HomeScreen();
	    
	}

	@Given("^Натиска бутон за вход в системата$")
	public void натиска_бутон_за_вход_в_системата() throws Throwable {
		loginForm= homeScreen.clickOnButton();
	    
	}

	@Given("^Отваря се попъп за вход в системата$")
	public void отваря_се_попъп_за_вход_в_системата() throws Throwable {
		assertNotNull(loginForm);
	    
	}

	@When("^Въведе валидно потребителско име$")
	public void въведе_валидно_потребителско_име() throws Throwable {
		loginForm.addUsername("Stoyan");
	    
	}

	@When("^въведе валидна парола$")
	public void въведе_валидна_парола() throws Throwable {
		loginForm.addPassword("pass");
	    
	}

	@When("^Натисне на бутона за вход в системата$")
	public void натисне_на_бутона_за_вход_в_системата() throws Throwable {
		loginForm.login();
	    
	}

	@Then("^Показва се съобщение \"([^\"]*)\"$")
	public void показва_се_съобщение(String expectedMessage) throws Throwable {
		assertEquals(expectedMessage, loginForm.getMessage());
	    
	}

	@When("^Въведе невалидно потребителско име$")
	public void въведе_невалидно_потребителско_име() throws Throwable {
		loginForm.addUsername("Stoyandkjcjkdhcd");
	    
	}

	@When("^въведе невалидна парола$")
	public void въведе_невалидна_парола() throws Throwable {
		loginForm.addPassword("pass1234567");
	    
	}


}