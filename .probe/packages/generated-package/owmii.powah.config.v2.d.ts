declare module "owmii.powah.config.v2.types.CableConfig" {
import {$Enum$$Type} from "java.lang.Enum"
import {$Tier, $Tier$$Type} from "owmii.powah.block.Tier"
import {$TieredEnergyValues, $TieredEnergyValues$$Type} from "owmii.powah.config.v2.values.TieredEnergyValues"
import {$IEnergyConfig$$Interface} from "owmii.powah.config.IEnergyConfig"

export class $CableConfig implements $IEnergyConfig$$Interface<($Tier)> {
 "transfer_rates": $TieredEnergyValues

constructor(arg0: $TieredEnergyValues$$Type)

public "getTransfer"(arg0: $Tier$$Type): long
public "getTransfer"(arg0: $Enum$$Type): long
public "getCapacity"(arg0: $Tier$$Type): long
public "getCapacity"(arg0: $Enum$$Type): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CableConfig$$Type = ($CableConfig);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CableConfig$$Original = $CableConfig;}
declare module "owmii.powah.config.v2.values.TieredChannelValues" {
import {$Tier$$Type} from "owmii.powah.block.Tier"

export class $TieredChannelValues {
 "blazing": integer
 "starter": integer
 "spirited": integer
 "nitro": integer
 "niotic": integer
 "basic": integer
 "hardened": integer

constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer)

public "get"(arg0: $Tier$$Type): integer
public static "getDefault"(): $TieredChannelValues
public static get "default"(): $TieredChannelValues
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TieredChannelValues$$Type = ($TieredChannelValues);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TieredChannelValues$$Original = $TieredChannelValues;}
declare module "owmii.powah.config.v2.types.GeneratorConfig" {
import {$Enum$$Type} from "java.lang.Enum"
import {$Tier, $Tier$$Type} from "owmii.powah.block.Tier"
import {$TieredEnergyValues, $TieredEnergyValues$$Type} from "owmii.powah.config.v2.values.TieredEnergyValues"
import {$IEnergyConfig$$Interface} from "owmii.powah.config.IEnergyConfig"

export class $GeneratorConfig implements $IEnergyConfig$$Interface<($Tier)> {
 "generation_rates": $TieredEnergyValues
 "transfer_rates": $TieredEnergyValues
 "capacities": $TieredEnergyValues

constructor(arg0: $TieredEnergyValues$$Type, arg1: $TieredEnergyValues$$Type, arg2: $TieredEnergyValues$$Type)

public "getTransfer"(arg0: $Tier$$Type): long
public "getTransfer"(arg0: $Enum$$Type): long
public "getGeneration"(arg0: $Tier$$Type): long
public "getCapacity"(arg0: $Tier$$Type): long
public "getCapacity"(arg0: $Enum$$Type): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeneratorConfig$$Type = ($GeneratorConfig);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GeneratorConfig$$Original = $GeneratorConfig;}
declare module "owmii.powah.config.v2.types.EnderConfig" {
import {$Enum$$Type} from "java.lang.Enum"
import {$Tier, $Tier$$Type} from "owmii.powah.block.Tier"
import {$TieredChannelValues, $TieredChannelValues$$Type} from "owmii.powah.config.v2.values.TieredChannelValues"
import {$TieredEnergyValues, $TieredEnergyValues$$Type} from "owmii.powah.config.v2.values.TieredEnergyValues"
import {$IEnergyConfig$$Interface} from "owmii.powah.config.IEnergyConfig"

export class $EnderConfig implements $IEnergyConfig$$Interface<($Tier)> {
 "transfer_rates": $TieredEnergyValues
 "channels": $TieredChannelValues

constructor(arg0: $TieredEnergyValues$$Type, arg1: $TieredChannelValues$$Type)

public "getTransfer"(arg0: $Tier$$Type): long
public "getTransfer"(arg0: $Enum$$Type): long
public "getCapacity"(arg0: $Tier$$Type): long
public "getCapacity"(arg0: $Enum$$Type): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnderConfig$$Type = ($EnderConfig);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnderConfig$$Original = $EnderConfig;}
declare module "owmii.powah.config.v2.types.EnergyConfig" {
import {$Enum$$Type} from "java.lang.Enum"
import {$Tier, $Tier$$Type} from "owmii.powah.block.Tier"
import {$TieredEnergyValues, $TieredEnergyValues$$Type} from "owmii.powah.config.v2.values.TieredEnergyValues"
import {$IEnergyConfig$$Interface} from "owmii.powah.config.IEnergyConfig"

export class $EnergyConfig implements $IEnergyConfig$$Interface<($Tier)> {
 "transfer_rates": $TieredEnergyValues
 "capacities": $TieredEnergyValues

constructor(arg0: $TieredEnergyValues$$Type, arg1: $TieredEnergyValues$$Type)

public "getTransfer"(arg0: $Tier$$Type): long
public "getTransfer"(arg0: $Enum$$Type): long
public "getCapacity"(arg0: $Tier$$Type): long
public "getCapacity"(arg0: $Enum$$Type): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergyConfig$$Type = ($EnergyConfig);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnergyConfig$$Original = $EnergyConfig;}
declare module "owmii.powah.config.v2.types.ChargingConfig" {
import {$Enum$$Type} from "java.lang.Enum"
import {$Tier, $Tier$$Type} from "owmii.powah.block.Tier"
import {$TieredEnergyValues, $TieredEnergyValues$$Type} from "owmii.powah.config.v2.values.TieredEnergyValues"
import {$IEnergyConfig$$Interface} from "owmii.powah.config.IEnergyConfig"

export class $ChargingConfig implements $IEnergyConfig$$Interface<($Tier)> {
 "transfer_rates": $TieredEnergyValues
 "capacities": $TieredEnergyValues
 "charging_rates": $TieredEnergyValues

constructor(arg0: $TieredEnergyValues$$Type, arg1: $TieredEnergyValues$$Type, arg2: $TieredEnergyValues$$Type)

public "getTransfer"(arg0: $Tier$$Type): long
public "getTransfer"(arg0: $Enum$$Type): long
public "getChargingSpeed"(arg0: $Tier$$Type): long
public "getCapacity"(arg0: $Tier$$Type): long
public "getCapacity"(arg0: $Enum$$Type): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChargingConfig$$Type = ($ChargingConfig);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChargingConfig$$Original = $ChargingConfig;}
declare module "owmii.powah.config.v2.values.TieredEnergyValues" {
import {$Tier$$Type} from "owmii.powah.block.Tier"

export class $TieredEnergyValues {
 "blazing": long
 "starter": long
 "spirited": long
 "nitro": long
 "niotic": long
 "basic": long
 "hardened": long

constructor(arg0: long, arg1: long, arg2: long, arg3: long, arg4: long, arg5: long, arg6: long)

public "get"(arg0: $Tier$$Type): long
public "copy"(arg0: long): $TieredEnergyValues
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TieredEnergyValues$$Type = ($TieredEnergyValues);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TieredEnergyValues$$Original = $TieredEnergyValues;}
