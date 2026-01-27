declare module "immersive_aircraft.item.upgrade.VehicleStat" {
import {$Map} from "java.util.Map"
import {$Record} from "java.lang.Record"

export class $VehicleStat extends $Record {
static readonly "FRICTION": $VehicleStat
static readonly "WIND": $VehicleStat
static readonly "PUSH_SPEED": $VehicleStat
static readonly "DIALS": $VehicleStat
static readonly "ENGINE_SPEED": $VehicleStat
static readonly "STATS": $Map<(StringJS), ($VehicleStat)>
static readonly "PITCH_SPEED": $VehicleStat
static readonly "LIFT": $VehicleStat
static readonly "VERTICAL_SPEED": $VehicleStat
static readonly "STABILIZER": $VehicleStat
static readonly "VERTICAL_DECAY": $VehicleStat
static readonly "ACCELERATION": $VehicleStat
static readonly "DURABILITY": $VehicleStat
static readonly "GROUND_FRICTION": $VehicleStat
static readonly "HUD": $VehicleStat
static readonly "ROTATION_DECAY": $VehicleStat
static readonly "FUEL": $VehicleStat
static readonly "MASS": $VehicleStat
static readonly "GLIDE_FACTOR": $VehicleStat
static readonly "GROUND_PITCH": $VehicleStat
static readonly "WATER_FRICTION": $VehicleStat
static readonly "ROLL_FACTOR": $VehicleStat
static readonly "YAW_SPEED": $VehicleStat
static readonly "HORIZONTAL_DECAY": $VehicleStat

constructor(name: StringJS, positive: boolean, defaultValue: float)

public "positive"(): boolean
public "name"(): StringJS
public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "register"(name: StringJS, positive: boolean, defaultValue: float): $VehicleStat
public static "register"(name: StringJS, positive: boolean): $VehicleStat
public "defaultValue"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VehicleStat$$Type = ({"positive"?: boolean, "name"?: StringJS, "defaultValue"?: float}) | ([positive?: boolean, name?: StringJS, defaultValue?: float]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VehicleStat$$Original = $VehicleStat;}
