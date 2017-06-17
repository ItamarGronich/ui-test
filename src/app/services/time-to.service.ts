import { Injectable } from '@angular/core';

/**
 * Time to service.
 * Returns human readable strings of time to a specific event by specified
 * intervals (Seconds, minuites, hours, days, weeks).
 *
 * @export {Function} human - Returns a human readable string of the largest available interval
 * to a specific date.
 */
@Injectable()
 export class TimeTo {

   human(time: Date) {
     let
       deltaSeconds = (Date.now() - time.getTime()) / 1000,
       humanTime = 'Just now';

     if (deltaSeconds > 60 && deltaSeconds < 3600) {
       let minuites =  Math.floor(deltaSeconds / 60);
       humanTime = `About ${minuites} minuites ago`;

     } else if (deltaSeconds > 3600 && deltaSeconds < (3600 * 24) ) {
       let hours =  Math.floor(deltaSeconds / 3600);
       humanTime = `About ${hours} hours ago`;

     } else if (deltaSeconds > (3600 * 24) && deltaSeconds < (3600 * 24 * 7) ) {
       let days =  Math.floor(deltaSeconds / (3600 * 24));
       humanTime = `About ${days} days ago`;

     } else if (deltaSeconds > (3600 * 24 * 7) ) {
       let weeks =  Math.floor(deltaSeconds / (3600 * 24 * 7));
       humanTime = `About ${weeks} weeks ago`;
     }

     return humanTime;
   }

 }
