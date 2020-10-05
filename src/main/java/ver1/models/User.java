package ver1.models;

import java.util.Set;

/**
 * 
 */
public class User {

	/**
	 * Default constructor
	 */
	public User() {
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
	
	public Set<Appointment> appointment;

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


	public Set<Appointment> getAppointment() {
		return appointment;
	}

	public void setAppointment(Set<Appointment> appointment) {
		this.appointment = appointment;
	}

}