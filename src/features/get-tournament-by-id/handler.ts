import { intervalStore } from "stores/interval.store";
import { roundStore } from "stores/round.store";
import { tournamentStore } from "stores/tournament.store";
import { getTournamentByIdService } from "./service";

export const handleGetTournamentById = async (id: number): Promise<void> => {
  const data = await getTournamentByIdService.handle(id);

  tournamentStore.setCurrentPlayers(data?.jogadores_atual ?? 0);
  tournamentStore.setTotalPlayers(data?.jogadores_total ?? 0);
  tournamentStore.setBreakTime(data?.horario_intervalo ?? new Date().toString());
  tournamentStore.setName(data?.nome_torneio ?? "");

  // main countdown
  roundStore.setBeforeInterval(data?.tempo_blind_preintervalo ?? 0);
  roundStore.setAfterInterval(data?.tempo_blind_posintervalo ?? 0);

  // interval duration
  if (intervalStore.minutes === 0 && intervalStore.seconds === 0) {
    intervalStore.setMinutes(data?.tempo_intervalo ?? 0);
  }
};
