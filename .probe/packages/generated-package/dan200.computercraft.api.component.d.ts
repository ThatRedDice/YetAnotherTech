declare module "dan200.computercraft.api.component.ComputerComponent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $ComputerComponent<T> {
public "toString"(): StringJS
public static "create"<T>(arg0: StringJS, arg1: StringJS): $ComputerComponent<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ComputerComponent$$Type<T> = ($ComputerComponent<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ComputerComponent$$Original<T> = $ComputerComponent<(T)>;}
