declare module "immersive_aircraft.entity.misc.BoundingBoxDescriptor" {
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$JsonObject$$Type} from "com.google.gson.JsonObject"
import {$Record} from "java.lang.Record"

export class $BoundingBoxDescriptor extends $Record {
constructor(width: float, height: float, x: float, y: float, z: float)

public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "decode"(buffer: $RegistryFriendlyByteBuf$$Type): $BoundingBoxDescriptor
public "encode"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "x"(): float
public "z"(): float
public "y"(): float
public "width"(): float
public "height"(): float
public static "fromJson"(json: $JsonObject$$Type): $BoundingBoxDescriptor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BoundingBoxDescriptor$$Type = ({"x"?: float, "y"?: float, "z"?: float, "width"?: float, "height"?: float}) | ([x?: float, y?: float, z?: float, width?: float, height?: float]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BoundingBoxDescriptor$$Original = $BoundingBoxDescriptor;}
declare module "immersive_aircraft.entity.misc.TrailDescriptor" {
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Record} from "java.lang.Record"

export class $TrailDescriptor extends $Record {
constructor(x: float, y: float, z: float, size: float, rotate: float, gray: float, length: integer)

public "gray"(): float
public "size"(): float
public "equals"(o: any): boolean
public "length"(): integer
public "toString"(): StringJS
public "hashCode"(): integer
public static "decode"(buf: $FriendlyByteBuf$$Type): $TrailDescriptor
public "encode"(buf: $FriendlyByteBuf$$Type): void
public "x"(): float
public "z"(): float
public "y"(): float
public "rotate"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrailDescriptor$$Type = ({"z"?: float, "length"?: integer, "gray"?: float, "x"?: float, "size"?: float, "y"?: float, "rotate"?: float}) | ([z?: float, length?: integer, gray?: float, x?: float, size?: float, y?: float, rotate?: float]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TrailDescriptor$$Original = $TrailDescriptor;}
declare module "immersive_aircraft.entity.misc.WeaponMount" {
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Matrix4f, $Matrix4f$$Type} from "org.joml.Matrix4f"
import {$Record} from "java.lang.Record"

export class $WeaponMount extends $Record {
static readonly "EMPTY": $WeaponMount

constructor(transform: $Matrix4f$$Type, blocking: boolean)

public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "decode"(buffer: $RegistryFriendlyByteBuf$$Type): $WeaponMount
public "encode"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "transform"(): $Matrix4f
public "blocking"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeaponMount$$Type = ({"transform"?: $Matrix4f$$Type, "blocking"?: boolean}) | ([transform?: $Matrix4f$$Type, blocking?: boolean]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WeaponMount$$Original = $WeaponMount;}
declare module "immersive_aircraft.entity.misc.VehicleProperties" {
import {$VehicleStat$$Type} from "immersive_aircraft.item.upgrade.VehicleStat"
import {$Map$$Type} from "java.util.Map"
import {$InventoryVehicleEntity$$Type} from "immersive_aircraft.entity.InventoryVehicleEntity"

export class $VehicleProperties {
constructor(baseValues: $Map$$Type<($VehicleStat$$Type), (float)>, vehicle: $InventoryVehicleEntity$$Type)

public "getAdditive"(stat: $VehicleStat$$Type): float
public "get"(stat: $VehicleStat$$Type): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VehicleProperties$$Type = ($VehicleProperties);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VehicleProperties$$Original = $VehicleProperties;}
declare module "immersive_aircraft.entity.misc.PositionDescriptor" {
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Matrix4f} from "org.joml.Matrix4f"
import {$Record} from "java.lang.Record"

export class $PositionDescriptor extends $Record {
constructor(x: float, y: float, z: float, yaw: float, pitch: float, roll: float)

public "roll"(): float
public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "decode"(byteBuf: $RegistryFriendlyByteBuf$$Type): $PositionDescriptor
public "encode"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "x"(): float
public "z"(): float
public "y"(): float
public "matrix"(): $Matrix4f
public "pitch"(): float
public "yaw"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PositionDescriptor$$Type = ({"x"?: float, "y"?: float, "z"?: float, "yaw"?: float, "pitch"?: float, "roll"?: float}) | ([x?: float, y?: float, z?: float, yaw?: float, pitch?: float, roll?: float]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PositionDescriptor$$Original = $PositionDescriptor;}
declare module "immersive_aircraft.entity.misc.WeaponMount$Type" {
import {$Enum} from "java.lang.Enum"

export class $WeaponMount$Type extends $Enum<($WeaponMount$Type)> {
static readonly "ROTATING": $WeaponMount$Type
static readonly "FRONT": $WeaponMount$Type
static readonly "DROP": $WeaponMount$Type

public static "values"(): ($WeaponMount$Type)[]
public static "valueOf"(name: StringJS): $WeaponMount$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeaponMount$Type$$Type = (("rotating") | ("front") | ("drop"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WeaponMount$Type$$Original = $WeaponMount$Type;}
declare module "immersive_aircraft.entity.misc.Trail" {
import {$Vector4f$$Type} from "org.joml.Vector4f"

export class $Trail {
 "entries": integer
readonly "gray": float
readonly "size": integer
 "nullEntries": integer
readonly "buffer": (float)[]
 "lastIndex": integer

constructor(length: integer)
constructor(length: integer, gray: float)

public "add"(first: $Vector4f$$Type, second: $Vector4f$$Type, alpha: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Trail$$Type = ($Trail);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Trail$$Original = $Trail;}
declare module "immersive_aircraft.entity.misc.VehicleData" {
import {$VehicleStat} from "immersive_aircraft.item.upgrade.VehicleStat"
import {$VehicleInventoryDescription} from "immersive_aircraft.entity.inventory.VehicleInventoryDescription"
import {$Map} from "java.util.Map"
import {$TrailDescriptor} from "immersive_aircraft.entity.misc.TrailDescriptor"
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$List} from "java.util.List"
import {$BoundingBoxDescriptor} from "immersive_aircraft.entity.misc.BoundingBoxDescriptor"
import {$JsonObject$$Type} from "com.google.gson.JsonObject"
import {$WeaponMount$Type} from "immersive_aircraft.entity.misc.WeaponMount$Type"
import {$WeaponMount} from "immersive_aircraft.entity.misc.WeaponMount"
import {$PositionDescriptor} from "immersive_aircraft.entity.misc.PositionDescriptor"

export class $VehicleData {
constructor(byteBuf: $RegistryFriendlyByteBuf$$Type)
constructor(json: $JsonObject$$Type)
constructor()

public "getInventoryDescription"(): $VehicleInventoryDescription
public "getWeaponMounts"(): $Map<(integer), ($Map<($WeaponMount$Type), ($List<($WeaponMount)>)>)>
public "getBoundingBoxes"(): $List<($BoundingBoxDescriptor)>
public "getPassengerPositions"(): $List<($List<($PositionDescriptor)>)>
public "getTrails"(): $List<($TrailDescriptor)>
public "encode"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "getProperties"(): $Map<($VehicleStat), (float)>
get "inventoryDescription"(): $VehicleInventoryDescription
get "weaponMounts"(): $Map<(integer), ($Map<($WeaponMount$Type), ($List<($WeaponMount)>)>)>
get "boundingBoxes"(): $List<($BoundingBoxDescriptor)>
get "passengerPositions"(): $List<($List<($PositionDescriptor)>)>
get "trails"(): $List<($TrailDescriptor)>
get "properties"(): $Map<($VehicleStat), (float)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VehicleData$$Type = ($VehicleData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VehicleData$$Original = $VehicleData;}
