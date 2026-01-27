declare module "blusunrize.immersiveengineering.api.fluid.IFluidPipe" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IFluidPipe$$Interface {
}

export class $IFluidPipe implements $IFluidPipe$$Interface {
static readonly "AMOUNT_UNPRESSURIZED": integer
static readonly "NBT_PRESSURIZED": StringJS
static readonly "AMOUNT_PRESSURIZED": integer

static "getTransferableAmount"(arg0: boolean): integer
 "stripPressureTag"(): boolean
 "canOutputPressurized"(arg0: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFluidPipe$$Type = ($IFluidPipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IFluidPipe$$Original = $IFluidPipe;}
