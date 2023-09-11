class AppConfig {
  private static instance: AppConfig;
  private apiUrl: string;

  private constructor() {
    this.apiUrl = "https://api.example.com";
  }

  public static getInstance(): AppConfig {
    if (!AppConfig.instance) {
      AppConfig.instance = new AppConfig();
    }
    return AppConfig.instance;
  }

  public getApiUrl(): string {
    return this.apiUrl;
  }

  public setApiUrl(newUrl: string): void {
    this.apiUrl = newUrl;
  }
}

const config1 = AppConfig.getInstance();
const config2 = AppConfig.getInstance();

console.log(config1 === config2);

config1.setApiUrl("https://api.new-example.com");

const config3 = AppConfig.getInstance();
console.log(config3.getApiUrl());
