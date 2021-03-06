// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  sysSpeedTopic: '/gps/speed',
  sysHeadingTopic: '/decomposer/heading',
  sysCoordsTopic: '/gps/fix',
  tarDistanceTopic: '/agros_path_follower/goal_dist',
  bearingTopic: '/agros_path_follower/goal_angle',
  tarLatTopic: '/path/tarLat',
  tarLonTopic: '/path/tarLon',
  imgTopic: 'camera/color/image_raw/compressed',
  depthTopic: 'camera/depth/image_rect_raw/compressed',
  routeTopic: 'agros_path_generator/route_network'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
