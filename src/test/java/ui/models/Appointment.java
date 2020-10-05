package ui.models;

import ver1.DB.AppointmentDB;;

public class Appointment {

	private String chosenDate;
	private String name;
	private String telephone;
	private String email;
	private boolean isDataSubmitted;
	
	public void addChosenDate(String chosenDate) {
		this.chosenDate=chosenDate;
	}
	public void addChosenEmail(String chosenEmail) {
		this.email=chosenEmail;
	}
	public void addChosenName(String chosenName) {
		this.name=chosenName;
	}
	public void addChosenTelephone(String chosenTelephone) {
		this.telephone=chosenTelephone;
	}
	
	public boolean show() {
			
			return true;
	}
	
	
	public String getSubmitMessage() {
		
		return isDataSubmitted ? "Success!" : "The data Not valid";
	}
}


	
	
	
	
	
