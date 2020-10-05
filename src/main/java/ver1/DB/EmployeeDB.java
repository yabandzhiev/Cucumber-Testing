package ver1.DB;


import java.util.ArrayList;
import java.util.List;

import ver1.models.Employee;



public class EmployeeDB {
	
	private List<Employee> employeeDB;
	
	public EmployeeDB() {
		employeeDB= new ArrayList<Employee>();
		Employee user= new Employee();
		user.setUsername("Stoyan");
		user.setPassword("pass");
		employeeDB.add(user);
	}

	public String login(String username, String password) {
		
		boolean userExists= employeeDB.stream()
				.anyMatch(employee -> employee.getUsername().equals(username)&& employee.getPassword().equals(password));
		return userExists ? "Влязохте в системата" : "Грешни данни";
	}



}
