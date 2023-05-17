// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {

  production: false,
  /////////////////////////////////////////////////////////////////////////////////////
  region: 'ap-south-1',
  userPoolId: 'ap-south-1_sTiFt1YLU',
  userPoolWebClientId: '6luadpdb8gtli8sekcm18q9ou9',
  //////////////////////////////////////////////////////////////////////////////////////
  masterUrl: 'https://masterdata.dev.jobcheck.in/masterdatabase/',
  jobseeker: 'https://jobseeker-service.dev.jobcheck.in/jobseeker/',

  jobSeekerUrl: 'https://jobseekers-profile-service.dev.jobcheck.in/jobseekerprofileservice/',
  
  jobseekerprofileUrl: 'https://jobseeker-profile-service.dev.jobcheck.in/jobseekerprofileservice/',
  personalBioUrl : 'https://jobseekers-profile-service.dev.jobcheck.in/jobseekerprofileservice/jobseekerprofile/basicdetail',
  phoneURL : `https://jobseekers-profile-service.dev.jobcheck.in/jobseekerprofileservice/jobseekerProfile/phoneNumbers/`,
  emailURL : `https://jobseekers-profile-service.dev.jobcheck.in/jobseekerprofileservice/jobseekerProfile/emails/`,
  /////////////////////////////////////////////////////////////////////////////////////
  notificationUrl : 'https://pushnotification-service.dev.jobcheck.in/notification/',
  //////////////////////////////////////////////////////////////////////////////////////

  jobseekerUrl1:`https://jobseekers-profile-service.dev.jobcheck.in/jobseekerprofileservice/jobseekerprofile/`,
  // https://jobseekers-profile-service.dev.jobcheck.in/jobseekerprofileservice/jobseekerprofile/
};







/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
