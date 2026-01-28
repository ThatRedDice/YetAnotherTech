declare module "net.neoforged.neoforge.energy.EnergyStorage" {
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$IEnergyStorage$$Interface} from "net.neoforged.neoforge.energy.IEnergyStorage"
import {$INBTSerializable$$Interface} from "net.neoforged.neoforge.common.util.INBTSerializable"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $EnergyStorage implements $IEnergyStorage$$Interface, $INBTSerializable$$Interface<($Tag)> {
constructor(arg0: integer)
constructor(arg0: integer, arg1: integer)
constructor(arg0: integer, arg1: integer, arg2: integer)
constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer)

public "canExtract"(): boolean
public "extractEnergy"(arg0: integer, arg1: boolean): integer
public "receiveEnergy"(arg0: integer, arg1: boolean): integer
public "canReceive"(): boolean
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): void
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
public "getEnergyStored"(): integer
public "getMaxEnergyStored"(): integer
get "energyStored"(): integer
get "maxEnergyStored"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergyStorage$$Type = ($EnergyStorage);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnergyStorage$$Original = $EnergyStorage;}
declare module "net.neoforged.neoforge.energy.IEnergyStorage" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IEnergyStorage$$Interface {
get "energyStored"(): integer
get "maxEnergyStored"(): integer
}

export class $IEnergyStorage implements $IEnergyStorage$$Interface {
 "canExtract"(): boolean
 "extractEnergy"(arg0: integer, arg1: boolean): integer
 "receiveEnergy"(arg0: integer, arg1: boolean): integer
 "canReceive"(): boolean
 "getEnergyStored"(): integer
 "getMaxEnergyStored"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEnergyStorage$$Type = ($IEnergyStorage);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEnergyStorage$$Original = $IEnergyStorage;}
