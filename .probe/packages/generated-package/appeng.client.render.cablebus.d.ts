declare module "appeng.client.render.cablebus.FacadeRenderState" {
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $FacadeRenderState {
constructor(arg0: $BlockState$$Type, arg1: boolean)

public "isTransparent"(): boolean
public "getSourceBlock"(): $BlockState
get "transparent"(): boolean
get "sourceBlock"(): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FacadeRenderState$$Type = ($FacadeRenderState);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FacadeRenderState$$Original = $FacadeRenderState;}
declare module "appeng.client.render.cablebus.CableBusRenderState" {
import {$AEColor, $AEColor$$Type} from "appeng.api.util.AEColor"
import {$FacadeRenderState} from "appeng.client.render.cablebus.FacadeRenderState"
import {$List} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$EnumMap, $EnumMap$$Type} from "java.util.EnumMap"
import {$AECableType, $AECableType$$Type} from "appeng.api.util.AECableType"
import {$ModelProperty} from "net.neoforged.neoforge.client.model.data.ModelProperty"
import {$CableCoreType, $CableCoreType$$Type} from "appeng.client.render.cablebus.CableCoreType"
import {$ModelData} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IPartModel} from "appeng.api.parts.IPartModel"
import {$EnumSet, $EnumSet$$Type} from "java.util.EnumSet"
import {$AABB} from "net.minecraft.world.phys.AABB"

export class $CableBusRenderState {
static readonly "PROPERTY": $ModelProperty<($CableBusRenderState)>

constructor()

public "getBoundingBoxes"(): $List<($AABB)>
public "getCableColor"(): $AEColor
public "setChannelsOnSide"(arg0: $EnumMap$$Type<($Direction$$Type), (integer)>): void
public "getChannelsOnSide"(): $EnumMap<($Direction), (integer)>
public "getFacades"(): $EnumMap<($Direction), ($FacadeRenderState)>
public "getPartModelData"(): $EnumMap<($Direction), ($ModelData)>
public "getCableType"(): $AECableType
public "getConnectionTypes"(): $EnumMap<($Direction), ($AECableType)>
public "getCoreType"(): $CableCoreType
public "getAttachmentConnections"(): $EnumMap<($Direction), (integer)>
public "getCableBusAdjacent"(): $EnumSet<($Direction)>
public "setCableBusAdjacent"(arg0: $EnumSet$$Type<($Direction$$Type)>): void
public "setCoreType"(arg0: $CableCoreType$$Type): void
public "setCableType"(arg0: $AECableType$$Type): void
public "setCableColor"(arg0: $AEColor$$Type): void
public "setConnectionTypes"(arg0: $EnumMap$$Type<($Direction$$Type), ($AECableType$$Type)>): void
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "setPos"(arg0: $BlockPos$$Type): void
public "getAttachments"(): $EnumMap<($Direction), ($IPartModel)>
public "getPos"(): $BlockPos
get "boundingBoxes"(): $List<($AABB)>
get "cableColor"(): $AEColor
set "channelsOnSide"(value: $EnumMap$$Type<($Direction$$Type), (integer)>)
get "channelsOnSide"(): $EnumMap<($Direction), (integer)>
get "facades"(): $EnumMap<($Direction), ($FacadeRenderState)>
get "partModelData"(): $EnumMap<($Direction), ($ModelData)>
get "cableType"(): $AECableType
get "connectionTypes"(): $EnumMap<($Direction), ($AECableType)>
get "coreType"(): $CableCoreType
get "attachmentConnections"(): $EnumMap<($Direction), (integer)>
get "cableBusAdjacent"(): $EnumSet<($Direction)>
set "cableBusAdjacent"(value: $EnumSet$$Type<($Direction$$Type)>)
set "coreType"(value: $CableCoreType$$Type)
set "cableType"(value: $AECableType$$Type)
set "cableColor"(value: $AEColor$$Type)
set "connectionTypes"(value: $EnumMap$$Type<($Direction$$Type), ($AECableType$$Type)>)
set "pos"(value: $BlockPos$$Type)
get "attachments"(): $EnumMap<($Direction), ($IPartModel)>
get "pos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CableBusRenderState$$Type = ($CableBusRenderState);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CableBusRenderState$$Original = $CableBusRenderState;}
declare module "appeng.client.render.cablebus.CableCoreType" {
import {$AECableType$$Type} from "appeng.api.util.AECableType"
import {$AEColor$$Type} from "appeng.api.util.AEColor"
import {$Enum} from "java.lang.Enum"
import {$Material} from "net.minecraft.client.resources.model.Material"

export class $CableCoreType extends $Enum<($CableCoreType)> {
static readonly "GLASS": $CableCoreType
static readonly "DENSE": $CableCoreType
static readonly "COVERED": $CableCoreType

public static "fromCableType"(arg0: $AECableType$$Type): $CableCoreType
public static "values"(): ($CableCoreType)[]
public static "valueOf"(arg0: StringJS): $CableCoreType
public "getTexture"(arg0: $AEColor$$Type): $Material
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CableCoreType$$Type = (("glass") | ("covered") | ("dense"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CableCoreType$$Original = $CableCoreType;}
