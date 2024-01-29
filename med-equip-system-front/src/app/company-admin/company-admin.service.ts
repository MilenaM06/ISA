import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { ReservedAppointment } from './model/reserved-appointment.model';
import { Appointment } from '../client/model/appointment.model';
import { CurrentUser } from '../auth/model/current-user.model';
import { environment } from 'src/env/environment';
import { CompanyAdmin } from '../layout/model/companyAdmin.model';
import { Contract } from './model/contract.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyAdminService {

  public currentUser = new BehaviorSubject<CurrentUser>({id: 0, email: "", role: null });

  constructor(private http: HttpClient) { }

  getReservedAppointments(companyId: number): Observable<Array<ReservedAppointment>> {
    return this.http.get<Array<ReservedAppointment>>(environment.apiHost +`appointments/companycalendar/${companyId}`);
  }

  getNotReservedAppointmentsByCompany(companyId: number): Observable<Appointment[]>{
    return this.http.get<Appointment[]>(environment.apiHost +`appointments/notreservedappointments/${companyId}`);
  }

  getCurrentUser(): Observable<CurrentUser>{
    return this.http.get<CurrentUser>(environment.apiHost + 'auth/whoami');
  }

  getCompanyAdminByUserId(id: number): Observable<CompanyAdmin>{ 
    return this.http.get<CompanyAdmin>(environment.apiHost +`companyadmins/user/${id}`);
  }
  getContracts(): Observable<Contract[]>{ 
    return this.http.get<Contract[]>(environment.apiHost +`contracts/get`);
  }
  cancelContract(contract: Contract): Observable<Contract>{ 
    return this.http.post<Contract>(environment.apiHost +`contracts/cancel`, contract);
  }

  startSendingCoordinates(): Observable<string> {
    return this.http.post<string>(environment.apiHost + `companyadmins/startsending`, {});
  }
}
