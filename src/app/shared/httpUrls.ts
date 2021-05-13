import { environment } from '../../environments/environment';

export class HttpUrls {
    public static GET_ALL_COVID_DATA = `${environment.serviceUrl}/v4/min/data.min.json`;
    public static GET_ALL_COVID_COUNTS = `${environment.serviceUrl}/data.json`;
    public static GET_ALL_VACCINE_SLOTS = `${environment.cowinUrl}/v2/appointment/sessions/public/calendarByPin`;
    public static POST_USER_DETAILS = `${environment.herokuUrl}/addUser`;
    public static GET_USER_DETAILS = `${environment.herokuUrl}/getUsers`;
}
