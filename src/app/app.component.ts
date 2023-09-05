import { ChangeDetectionStrategy, Component, ViewEncapsulation,ElementRef, HostListener } from '@angular/core';
import { startOfDay, endOfDay, subDays, startOfMonth, endOfMonth, subMonths, startOfYear, endOfYear ,subYears,subHours,startOfHour,endOfHour} from 'date-fns';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
    dateTimeRange: Date[];
    dateTimeRangeFrom: Date;
    dateTimeRangeTo: Date;
  
    constructor(private elRef: ElementRef) {
      this.dateTimeRange = [new Date(), new Date()]; // Initialize as a range
    }

    @HostListener('document:click', ['$event'])
    onDocumentClick(event: MouseEvent): void {
      const ref = document.querySelector('owl-date-time-container');
      if(!ref){
        this.handleDateTimeClosed()
      }
    }

    handleDateTimeClosed() {
      const ref = document.querySelector('#data-wrapper');
      if (ref instanceof HTMLElement) {
        ref.style.display = 'none';
      }

    }
    
    handleInputClick(event: MouseEvent) {
      const ref = document.querySelector('#data-wrapper');
      if (ref instanceof HTMLElement) {
        ref.style.display = 'flex';
        ref.style.flexDirection='column'
      }
    }

    handleDateTimeBlur() {
      // Handle the blur event for the date-time picker here
      // This is triggered when the date-time picker loses focus
      console.log('Date Time Picker closed');
      
    }

    
  
    setTodayRange() {
      const today = new Date();
      this.dateTimeRangeFrom = startOfDay(today);
      this.dateTimeRangeTo = endOfDay(today);
      this.dateTimeRange = [this.dateTimeRangeFrom, this.dateTimeRangeTo]; // Update the range
    }
  
    setYesterdayRange() {
      const yesterday = subDays(new Date(), 1);
      this.dateTimeRangeFrom = startOfDay(yesterday);
      this.dateTimeRangeTo = endOfDay(yesterday);
      this.dateTimeRange = [this.dateTimeRangeFrom, this.dateTimeRangeTo]; // Update the range
    }
    setLastDaysRange(days: number) {
        const fromDate = subDays(new Date(), days - 1);
        this.dateTimeRangeFrom = startOfDay(fromDate);
        this.dateTimeRangeTo = endOfDay(new Date());
        this.dateTimeRange = [this.dateTimeRangeFrom, this.dateTimeRangeTo]; // Update the range
      }
    
      setLastMonthRange() {
        const lastMonthStart = startOfMonth(subMonths(new Date(), 1));
        const lastMonthEnd = endOfMonth(subMonths(new Date(), 1));
        this.dateTimeRangeFrom = lastMonthStart;
        this.dateTimeRangeTo = lastMonthEnd;
        this.dateTimeRange = [this.dateTimeRangeFrom, this.dateTimeRangeTo]; // Update the range
      }
    
      setLastYearRange() {
        const lastYearStart = startOfYear(subYears(new Date(), 1));
        const lastYearEnd = endOfYear(subYears(new Date(), 1));
        this.dateTimeRangeFrom = lastYearStart;
        this.dateTimeRangeTo = lastYearEnd;
        this.dateTimeRange = [this.dateTimeRangeFrom, this.dateTimeRangeTo]; // Update the range
      }

      setLastHoursRange(hours: number) {
        const fromDateTime = subHours(new Date(), hours);
        const toDateTime = new Date();
    
        this.dateTimeRangeFrom = startOfHour(fromDateTime);
        this.dateTimeRangeTo = endOfHour(toDateTime);
        this.dateTimeRange = [this.dateTimeRangeFrom, this.dateTimeRangeTo]; // Update the range
      }
  
}
