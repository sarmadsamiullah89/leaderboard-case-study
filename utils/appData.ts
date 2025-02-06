import { UserStats } from './appModels';
import leaderboard from './leaderboard.json';

const leaderBoardData: UserStats[] = Object.values(leaderboard)

export {
    leaderBoardData
}
