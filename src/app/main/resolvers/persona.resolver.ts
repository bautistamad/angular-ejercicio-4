import { ResolveFn } from '@angular/router';
import { IPersona } from '../api/models/i-persona';
import { inject } from '@angular/core';
import { PersonaResourceService } from '../api/resources/persona-resource.service';


export const personasResolver: ResolveFn<IPersona[]> = (route, state) => {
  return inject(PersonaResourceService).get()
};

export const personaResolver: ResolveFn<IPersona[]> = (route, state) => {

  // Usar la función para convertir el valor "1" a una cadena hexadecimal
  const valueToConvert = 1; // El número que quieres convertir
  const hexLength = 64; // La longitud de la cadena hexadecimal que necesitas, ajusta según sea necesario
  const hexString = numberToFixedLengthHex(valueToConvert, hexLength);

  console.log(hexString); // Imprime la cadena hexadecimal

  return inject(PersonaResourceService).getPersona({nro_persona: hexString})
};

function numberToFixedLengthHex(value: number, length: number): string {
  // Convertir el valor a hexadecimal
  let hexValue = value.toString(16).toUpperCase();

  // Rellenar con ceros a la izquierda si es necesario
  while (hexValue.length < length) {
    hexValue = '0' + hexValue;
  }

  // Cortar la cadena si es más larga que la longitud deseada
  if (hexValue.length > length) {
    hexValue = hexValue.substring(0, length);
  }

  return hexValue;
}