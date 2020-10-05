package ui.models;

public class AppointmentScreen {

	Appointment appointmentForm;
		private String errorMessage;

		public boolean clickOpenButton() {
			return true;
		}

		public boolean isFormVisible() {
			appointmentForm= new Appointment();
			return appointmentForm.show();
		}

		
		public void addChosenDate(String date) {
			
			boolean isThereDate= null!=date && !"".equals(date);
			
			if(date.length()<=9 || date.length()>=11 || (!isThereDate)) {
				errorMessage="Невалидна дата!";
			}else {
				appointmentForm.addChosenDate(date);
			}
		}
		
		
		
		public void addChosenEmail(String email) {
			
			boolean isThereEmail= null!=email && !"".equals(email);
			
			if (!isThereEmail) {
				errorMessage = "Невалиден email!";
			}else {
				appointmentForm.addChosenEmail(email);
			}
		}
		
		
		
		public void addChosenName(String name) {
			
			boolean isThereName= null!=name && !"".equals(name);
			
			if (name.matches(".*\\d.*") || (!isThereName) ) {
				
				errorMessage="Невалидно име!";
				
			}else {
				appointmentForm.addChosenName(name);
			}

		}
		
		public void addChosenTelephone(String telephone) {
			boolean isThereTelephone= null!=telephone && !"".equals(telephone);
			
			if (!isThereTelephone || telephone.length()<=9 || telephone.length()>=11) {
				errorMessage = "Невалиден телефон!";
			}else {
				appointmentForm.addChosenTelephone(telephone);
			}
			
		}
		

		public String getStateMessage() {
			
		if(errorMessage!=null) {
			return errorMessage !=null ? errorMessage : appointmentForm.getSubmitMessage();
		}else {
			 errorMessage =("Моля потвърдете от избраната от вас поща.");
			 return errorMessage;
		}
		
		}
		
		

		
			
}




