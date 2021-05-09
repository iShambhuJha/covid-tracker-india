import { environment } from '../../environments/environment';

export class HttpUrls {
    public static GET_ALL_COVID_DATA = `${environment.serviceUrl}/data.json`;
    public static GET_ALL_VACCINE_SLOTS = `${environment.cowinUrl}/v2/appointment/sessions/public/calendarByPin`;
    public static POST_USER_DETAILS = `${environment.fbUrl}/users.json`;
    public static GET_USER_DETAILS = `${environment.fbUrl}/users.json`;
}
