package ver1.DB;

import java.util.ArrayList;
import java.util.List;

import ver1.models.Appointment;



public class AppointmentDB {

	private List<Appointment> appointmentDB;
	
	public AppointmentDB() {
		appointmentDB= new ArrayList<Appointment>();
		Appointment appo= new Appointment();
		appo.setChosenDate("21-02-2020");
		appo.setName("Ivan Ivanov");
		appo.setEmail("ivanivanov@abv.bg");
		appo.setTelephone("0878123456");
		appointmentDB.add(appo);
	
		}
	
		
	
}
