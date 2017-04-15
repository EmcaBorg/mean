import {Pipe, PipeTransform} from '@angular/core';
import {MONTHS} from "../config/Constants";
import {DateFormatter} from "../utils/DateFormatter";
import {TranslateService} from "../../../../translations/TranslateService";


@Pipe({name: 'monthFromNumber'})
export class MonthFromNumberPipe implements PipeTransform {
    transform(value: number): string {
        return MONTHS[value];
    }


}

@Pipe({name: 'dayMonthParted'})
export class DayMonthPartedPipe implements PipeTransform {

    constructor(private translateService: TranslateService){}
    // Monday, 1. Nov
    transform(value: number, dayOffset: number): string {
        let date: Date = new Date(value);
        date.setDate(date.getDate() + dayOffset);
        let dateFormatted = DateFormatter.dayMonthParted(date, false);
        return this.translateService.instant(dateFormatted.dayForTranslation) + ", " + dateFormatted.day + ". " + dateFormatted.month;
    }
}


@Pipe({name: 'dateFromTo'})
export class DateFromToPipe implements PipeTransform {
    transform(value: number): string {
        let dateTo = new Date(value);
        dateTo.setFullYear(dateTo.getFullYear());
        dateTo.setMonth(dateTo.getMonth());
        dateTo.setDate(dateTo.getDate() + 6);
        return DateFormatter.dateMonthFromMilliToString(value) + ' - ' + DateFormatter.dateMonthFromMilliToString(dateTo.getTime());
    }
}

@Pipe({name: 'dateMonthFromMilli'})
export class DateMonthFromMilliPipe{
    transform(value: number): string {
        return DateFormatter.dateMonthFromMilliToString(value);
    }
}

@Pipe({name: 'getMilliFromDays'})
export class GetMilliFromDay implements PipeTransform {
    transform(value: number): any {
        return value * 24 * 60 * 60 * 1000;
    }
}

