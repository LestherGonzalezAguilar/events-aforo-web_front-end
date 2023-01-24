import moment from 'moment';
import 'moment/locale/es';


export const getDateES = (date) => {
    moment.locale('es');
    const fecha_convertida = moment(date).format('LL');
    // console.log({ fecha_convertida })

    return fecha_convertida
}