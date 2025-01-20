import { Component, OnInit } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {

  appointmentList: Appointment[] = [];
  newAppointmentTitle: string = "";
  newAppointmentDate: Date = new Date();

  ngOnInit(): void {
    let savedAppointments  =localStorage.getItem("appointments");
    this.appointmentList = savedAppointments ? JSON.parse(savedAppointments) : [];
  }

  deleteAppointment(index: number): void {
    this.appointmentList.splice(index, 1);
    localStorage.setItem("appointments", JSON.stringify(this.appointmentList));
  }

  addAppointment(): void {
    let newAppointment: Appointment = {
      id: Date.now(),
      title: this.newAppointmentTitle,
      date: this.newAppointmentDate
    }
    this.appointmentList.push(newAppointment);
    localStorage.setItem("appointments", JSON.stringify(this.appointmentList))
    this.newAppointmentTitle = "";
    this.newAppointmentDate = new Date();
  }
}
