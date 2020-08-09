export interface ApiKeysState {
  napster: string | null;
  firestoreApiKey: string | null;
  firestoreProjectId: string | null;
  firestoreAppId?: string | null;
}

export interface SearchResultsState {
  results: NapsterSongData[];
  error: any;
}

export interface SettingsState {
  folderStored: string;
  jumpAhead: number;
  seekAhead: number;
  seekBack: number;
  jumpBack: number;
  controlWindow: boolean;
  animations: boolean;
  hasChanges: boolean;
}

export interface RootState {
  updater: boolean;
  apiKeys: ApiKeysState;
  searchResults: SearchResultsState;
  settings: SettingsState;
}

export interface QueueState {
  queue: SongData[];
  allSongs: SongData[];
  index: number;
  shuffle: boolean;
  loop: boolean;
}