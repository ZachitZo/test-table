import { Fields } from '../types/fields';

interface Person {
  [Fields.firstName]: string,
  [Fields.height]: number,
  [Fields.weight]: number,
}

export default Person;
