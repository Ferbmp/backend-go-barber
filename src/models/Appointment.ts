import { uuid } from 'uuidv4';
// import { v4 as uuid } from 'uuid'; >> Verificar se ainda funciona
class Appointment {
  id: string;

  provider: string;

  date: Date;

  constructor(provider: string, date: Date) {
    this.id = uuid();
    this.provider = provider;
    this.date = date;
  }
}

export default Appointment;
