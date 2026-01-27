declare module "immersive_aircraft.util.InterpolatedFloat" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $InterpolatedFloat {
constructor(steps: float)
constructor()

public "setSteps"(steps: float): void
public "getSmooth"(tickDelta: float): float
public "getSmooth"(): float
public "decay"(towards: float, decay: float): void
public "getDiff"(): float
public "get"(tickDelta: float): float
public "update"(n: float): void
public "getValue"(): float
set "steps"(value: float)
get "smooth"(): float
get "diff"(): float
get "value"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InterpolatedFloat$$Type = ($InterpolatedFloat);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InterpolatedFloat$$Original = $InterpolatedFloat;}
