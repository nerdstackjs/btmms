import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { DispatchComponent } from '../../components/dispatch-details/dispatch-details.component';
import { MakeBookingComponent } from 'app/make-booking/make-booking.component';
import { ArMakeBookingComponent } from 'app/ar-make-booking/ar-make-booking.component';
import { ViewMySlotsComponent } from 'app/view-my-slots/view-my-slots.component';
import { Role } from 'app/models/role';
import { RoservationRequestsComponent } from 'app/roservation-requests/roservation-requests.component';
import { AuthGuard } from 'app/guard/auth.guard';
import { SettingsComponent } from '../../settings/settings.component';
import { DestinationDayComponent } from '../../destination-day/destination-day.component';
import { SlotTimeComponent } from '../../slot-time/slot-time.component';
import { UpdateSlotTimeComponent } from '../../update-slot-time/update-slot-time.component';
import { RejectComponent } from '../../reject/reject.component';
import { CancelReservationComponent } from '../../cancel-reservation/cancel-reservation.component';
import { CancellationRequestComponent } from '../../cancellation-request/cancellation-request.component';
import { ConfirmCancellationComponent } from '../../confirm-cancellation/confirm-cancellation.component';
import { ModesComponent } from '../../settings/components/modes/modes.component';

import { DueTimeComponent } from '../../settings/components/due-time/due-time.component';
import {ApproveReservationComponent} from '../../approve-reservation/approve-reservation.component';
import {DpEditReservationComponent} from '../../dp-edit-reservation/dp-edit-reservation.component';
import {ArEditResevertionComponent} from '../../ar-edit-resevertion/ar-edit-resevertion.component';
import {ViewMyPenaltiesComponent} from '../../view-my-penalties/view-my-penalties.component';
import {CancelArrivalReservationComponent} from '../../cancel-arrival-reservation/cancel-arrival-reservation.component';

export const AdminLayoutRoutes: Routes = [
  { path: 'user-profile', component: DashboardComponent },
  {
    path: 'dashboard',
    component: UserProfileComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'make-booking',
    component: MakeBookingComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'ar-make-booking',
    component: ArMakeBookingComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'veiw-slot',
    component: ViewMySlotsComponent,
    canActivate: [AuthGuard],
    //  data: { roles: [Role.admin] }
  },
  {
    path: 'veiw-resavations-requests',
    component: RoservationRequestsComponent,
    canActivate: [AuthGuard],
    //  data: { roles: [Role.admin] }
  },
  {
    path: 'settings',
    component: SettingsComponent,
    canActivate: [AuthGuard],
    //  data: { roles: [Role.admin] }
  },
  {
    path: 'destination-time',
    component: DestinationDayComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'slot-time',
    component: SlotTimeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'update-slot',
    component: UpdateSlotTimeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'reject',
    component: RejectComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'cancel',
    component: CancelReservationComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'request-cancel',
    component: CancellationRequestComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'confirm-cancel',
    component: ConfirmCancellationComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'modes',
    component: ModesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'due-time',
    component: DueTimeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'approve',
    component: ApproveReservationComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'edit-departure-reservation',
    component: DpEditReservationComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'edit-arrival-reservation',
    component: ArEditResevertionComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'view-my-penalties',
    component: ViewMyPenaltiesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'cancel-arrival-reservation',
    component: CancelArrivalReservationComponent,
    canActivate: [AuthGuard],
  },
];
