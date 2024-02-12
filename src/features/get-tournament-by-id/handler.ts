import { tournamentStore } from "stores/tournament.store";
import { getTournamentByIdService } from "./service";

export const handleGetTournamentById = async (id: number): Promise<void> => {
  const data = await getTournamentByIdService.handle(id);

  tournamentStore.setCurrentPlayers(data?.jogadores_atual ?? 0);
  tournamentStore.setTotalPlayers(data?.jogadores_total ?? 0);
  tournamentStore.setBreakTime(data?.horario_intervalo ?? new Date().toString());
};
