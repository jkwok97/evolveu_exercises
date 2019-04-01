import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';
// import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService]
})
export class NewAccountComponent {
  // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(
    private loggingservice: LoggingService, 
    private accountsService: AccountsService) {
      this.accountsService.statusUpdated.subscribe(
        (status: string) => alert('new status: ' + status)
      );
    }

  onCreateAccount(accountName: string, accountStatus: string) {
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });
    // below will work but not recommended
    // const service = new LoggingService();
    // service.logStatusChange(accountStatus);
    //
    // console.log('A server status changed, new status: ' + accountStatus);
    this.accountsService.addAccount(accountName, accountStatus);
    // this.loggingservice.logStatusChange(accountStatus);
  }
}
