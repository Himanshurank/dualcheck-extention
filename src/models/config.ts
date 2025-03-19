export interface ZohoConfig {
  token: string;
  email: string;
}

export interface BasecampConfig {
  token: string;
  accountId: string;
  projectId: string;
  messageBoardId: string;
  checkInMessage: string;
  checkOutMessage: string;
}

export interface AppConfig {
  zoho: ZohoConfig;
  basecamp: BasecampConfig;
}
