import { api } from "api";

export class ActivateIntervalService {
  public async handle(id: number): Promise<boolean> {
    try {
      await api.post(`/ativar_intervalo/${id}/`);

      return true;
    } catch (error: unknown) {
      console.error(error);

      return false;
    }
  }
}

export const activateIntervalService = new ActivateIntervalService();
