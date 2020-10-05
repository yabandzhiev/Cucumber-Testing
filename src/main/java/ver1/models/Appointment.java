package ver1.models;


import java.util.Set;



/**
 * 
 */
public class Appointment {

	/**
	 * Default constructor
	 */
	public Appointment() {
	}

	/**
	 * 
	 */
	private String name;

	/**
	 * 
	 */
	private String telephone;

	/**
	 * 
	 */
	private String email;

	/**
	 * 
	 */
	public String chosenDate;

	/**
	 * 
	 */
	public String appointedBy;

	/**
	 * 
	 */
	
	public User user;

	/**
	 * 
	 */
	
	
	public void getRole() {
		// TODO implement here
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getTelephone() {
		return telephone;
	}

	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getChosenDate() {
		return chosenDate;
	}

	public void setChosenDate(String chosenDate) {
		this.chosenDate = chosenDate;
	}

	public String getAppointedBy() {
		return appointedBy;
	}

	public void setAppointedBy(String appointedBy) {
		this.appointedBy = appointedBy;
	}

	

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

}