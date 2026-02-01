export class RouteProvider {
  public static router: any = null;

  public static initialize(router: any) {
    RouteProvider.router = router;
  }

  public static navigate(...params: any) {
    RouteProvider.router.navigate(...params);
  }
}
