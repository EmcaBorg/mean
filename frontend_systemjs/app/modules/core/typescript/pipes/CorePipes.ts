import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'keys'})
export class KeysPipe implements PipeTransform {
    transform(value: any, args: string[]): any {
        if (!value) {
            return value;
        }
        let keys: Array<Object> = [];
        for (let key in value) {
            keys.push({key: key, value: value[key]});
        }
        return keys;
    }
}

@Pipe({name: 'slicer'})
export class SlicerPipe implements PipeTransform {
    transform(value: string, start: number, end: number, usePoints: boolean): string {
        return value.length >= end ? usePoints ? value.slice(start, end - 3) + "..." : value.slice(start, end) : value;
    }
}

@Pipe({name: 'capitalize'})
export class CapitalizePipe implements PipeTransform{
    transform(value: any): any {
        try{
            return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
        }
        catch (ex){
            return value;
        }

    }
}