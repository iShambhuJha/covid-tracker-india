import { environment } from '../../environments/environment';

export class HttpUrls {
    public static GET_ALL_COVID_DATA = `${environment.serviceUrl}/data.json`;
    public static GET_ALL_VACCINE_SLOTS = `${environment.cowinUrl}/v2/appointment/sessions/public/calendarByPin`;
}
