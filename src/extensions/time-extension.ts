export class TimeExtension {
  public toMinutesAndSeconds(milliseconds: number): string {
    const totalSegundos = Math.floor(milliseconds / 1000);
    const minutos = Math.floor(totalSegundos / 60);
    const segundos = totalSegundos % 60;

    const minutosFormatados = minutos < 10 ? `0${minutos}` : minutos;
    const segundosFormatados = segundos < 10 ? `0${segundos}` : segundos;

    return `${minutosFormatados}:${segundosFormatados}`;
  }
}

export const timeExtension = new TimeExtension();
