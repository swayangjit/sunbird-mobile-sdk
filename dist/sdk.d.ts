import { ApiService } from './api';
import { DbService } from './db';
import { AuthService } from './auth';
import { TelemetryService } from './telemetry';
import { SharedPreferences } from './util/shared-preferences';
import { SdkConfig } from './sdk-config';
import { ContentFeedbackService, ContentService } from './content';
import { CourseService } from './course';
import { FormService } from './form';
import { FrameworkService, FrameworkUtilService } from './framework';
import { ProfileService } from './profile';
import { KeyValueStore } from './key-value-store';
import { PageAssembleService } from './page';
import { GroupService } from './group';
import { SystemSettingsService } from './system-settings';
export declare class SunbirdSdk {
    private static _instance?;
    static readonly instance: SunbirdSdk;
    private _dbService;
    private _telemetryService;
    private _authService;
    private _apiService;
    private _keyValueStore;
    private _profileService;
    private _groupService;
    private _contentService;
    private _courseService;
    private _formService;
    private _frameworkService;
    private _frameworkUtilService;
    private _pageAssembleService;
    private _sharedPreferences;
    private _fileService;
    private _systemSettingsService;
    private _zipService;
    private _deviceInfo;
    private _sdkConfig;
    private _contentFeedbackService;
    readonly sdkConfig: SdkConfig;
    readonly pageAssembleService: PageAssembleService;
    readonly dbService: DbService;
    readonly telemetryService: TelemetryService;
    readonly authService: AuthService;
    readonly apiService: ApiService;
    readonly keyValueStore: KeyValueStore;
    readonly profileService: ProfileService;
    readonly groupService: GroupService;
    readonly contentService: ContentService;
    readonly contentFeedbackService: ContentFeedbackService;
    readonly courseService: CourseService;
    readonly formService: FormService;
    readonly frameworkService: FrameworkService;
    readonly frameworkUtilService: FrameworkUtilService;
    readonly sharedPreferences: SharedPreferences;
    readonly systemSettingsService: SystemSettingsService;
    init(sdkConfig: SdkConfig): Promise<void>;
    private postInit;
}
