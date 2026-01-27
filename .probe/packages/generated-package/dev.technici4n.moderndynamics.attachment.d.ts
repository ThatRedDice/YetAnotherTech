declare module "dev.technici4n.moderndynamics.attachment.IoAttachmentType" {
import {$Enum} from "java.lang.Enum"

export class $IoAttachmentType extends $Enum<($IoAttachmentType)> {
static readonly "EXTRACTOR": $IoAttachmentType
static readonly "FILTER": $IoAttachmentType
static readonly "ATTRACTOR": $IoAttachmentType

public static "values"(): ($IoAttachmentType)[]
public static "valueOf"(arg0: StringJS): $IoAttachmentType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IoAttachmentType$$Type = (("attractor") | ("extractor") | ("filter"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IoAttachmentType$$Original = $IoAttachmentType;}
declare module "dev.technici4n.moderndynamics.attachment.IoAttachmentItem" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IoAttachmentType, $IoAttachmentType$$Type} from "dev.technici4n.moderndynamics.attachment.IoAttachmentType"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$NodeHost$$Type} from "dev.technici4n.moderndynamics.network.NodeHost"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$AttachmentItem} from "dev.technici4n.moderndynamics.attachment.AttachmentItem"
import {$Setting} from "dev.technici4n.moderndynamics.attachment.Setting"
import {$Item} from "net.minecraft.world.item.Item"
import {$Set} from "java.util.Set"
import {$AttachedAttachment} from "dev.technici4n.moderndynamics.attachment.attached.AttachedAttachment"
import {$RenderedAttachment, $RenderedAttachment$$Type} from "dev.technici4n.moderndynamics.attachment.RenderedAttachment"

export class $IoAttachmentItem extends $AttachmentItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
readonly "attachment": $RenderedAttachment
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $RenderedAttachment$$Type, arg1: $IoAttachmentType$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "createAttached"(arg0: $NodeHost$$Type, arg1: $CompoundTag$$Type, arg2: $HolderLookup$Provider$$Type): $AttachedAttachment
public "getSupportedSettings"(): $Set<($Setting)>
public "getType"(): $IoAttachmentType
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "supportedSettings"(): $Set<($Setting)>
get "type"(): $IoAttachmentType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IoAttachmentItem$$Type = ($IoAttachmentItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IoAttachmentItem$$Original = $IoAttachmentItem;}
declare module "dev.technici4n.moderndynamics.attachment.InhibitorAttachmentItem" {
import {$NodeHost$$Type} from "dev.technici4n.moderndynamics.network.NodeHost"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$AttachmentItem} from "dev.technici4n.moderndynamics.attachment.AttachmentItem"
import {$AttachedInhibitor} from "dev.technici4n.moderndynamics.attachment.attached.AttachedInhibitor"
import {$Item} from "net.minecraft.world.item.Item"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$RenderedAttachment, $RenderedAttachment$$Type} from "dev.technici4n.moderndynamics.attachment.RenderedAttachment"

export class $InhibitorAttachmentItem extends $AttachmentItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
readonly "attachment": $RenderedAttachment
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $RenderedAttachment$$Type)

public "createAttached"(arg0: $NodeHost$$Type, arg1: $CompoundTag$$Type, arg2: $HolderLookup$Provider$$Type): $AttachedInhibitor
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InhibitorAttachmentItem$$Type = ($InhibitorAttachmentItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InhibitorAttachmentItem$$Original = $InhibitorAttachmentItem;}
declare module "dev.technici4n.moderndynamics.attachment.AttachmentItem" {
import {$NodeHost$$Type} from "dev.technici4n.moderndynamics.network.NodeHost"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$AttachedAttachment} from "dev.technici4n.moderndynamics.attachment.attached.AttachedAttachment"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$RenderedAttachment, $RenderedAttachment$$Type} from "dev.technici4n.moderndynamics.attachment.RenderedAttachment"

export class $AttachmentItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
readonly "attachment": $RenderedAttachment
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $RenderedAttachment$$Type)

public "createAttached"(arg0: $NodeHost$$Type, arg1: $CompoundTag$$Type, arg2: $HolderLookup$Provider$$Type): $AttachedAttachment
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttachmentItem$$Type = ($AttachmentItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AttachmentItem$$Original = $AttachmentItem;}
declare module "dev.technici4n.moderndynamics.attachment.Setting" {
import {$Enum} from "java.lang.Enum"
import {$Component} from "net.minecraft.network.chat.Component"

export class $Setting extends $Enum<($Setting)> {
static readonly "FILTER_MOD": $Setting
static readonly "FILTER_INVERSION": $Setting
static readonly "FILTER_NBT": $Setting
static readonly "FILTER_SIMILAR": $Setting
static readonly "MAX_ITEMS_IN_INVENTORY": $Setting
static readonly "MAX_ITEMS_EXTRACTED": $Setting
static readonly "OVERSENDING_MODE": $Setting
static readonly "FILTER_DAMAGE": $Setting
static readonly "ROUTING_MODE": $Setting

public "getTooltipName"(): $Component
public "isFilter"(): boolean
public static "values"(): ($Setting)[]
public static "valueOf"(arg0: StringJS): $Setting
get "tooltipName"(): $Component
get "filter"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Setting$$Type = (("filter_inversion") | ("filter_damage") | ("filter_nbt") | ("filter_similar") | ("filter_mod") | ("routing_mode") | ("oversending_mode") | ("max_items_in_inventory") | ("max_items_extracted"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Setting$$Original = $Setting;}
declare module "dev.technici4n.moderndynamics.attachment.attached.AttachedAttachment" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$AttachmentModelData} from "dev.technici4n.moderndynamics.model.AttachmentModelData"
import {$PipeBlockEntity$$Type} from "dev.technici4n.moderndynamics.pipe.PipeBlockEntity"
import {$List} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$AttachmentItem, $AttachmentItem$$Type} from "dev.technici4n.moderndynamics.attachment.AttachmentItem"
import {$Component} from "net.minecraft.network.chat.Component"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ExtendedMenuProvider} from "dev.technici4n.moderndynamics.util.ExtendedMenuProvider"

export class $AttachedAttachment {
constructor(arg0: $AttachmentItem$$Type, arg1: $CompoundTag$$Type)

public "getDrops"(): $List<($ItemStack)>
public "createMenu"(arg0: $PipeBlockEntity$$Type, arg1: $Direction$$Type): $ExtendedMenuProvider
public "onPlaced"(arg0: $Player$$Type): void
public "tryClearContents"(arg0: $PipeBlockEntity$$Type): boolean
public "hasMenu"(): boolean
public "allowsItemConnection"(): boolean
public "writeConfigTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): $CompoundTag
public "getItem"(): $AttachmentItem
public "update"(arg0: $CompoundTag$$Type): boolean
public "getDisplayName"(): $Component
public "getModelData"(): $AttachmentModelData
get "drops"(): $List<($ItemStack)>
get "item"(): $AttachmentItem
get "displayName"(): $Component
get "modelData"(): $AttachmentModelData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttachedAttachment$$Type = ($AttachedAttachment);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AttachedAttachment$$Original = $AttachedAttachment;}
declare module "dev.technici4n.moderndynamics.attachment.attached.AttachedInhibitor" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$InhibitorAttachmentItem$$Type} from "dev.technici4n.moderndynamics.attachment.InhibitorAttachmentItem"
import {$AttachedAttachment} from "dev.technici4n.moderndynamics.attachment.attached.AttachedAttachment"

export class $AttachedInhibitor extends $AttachedAttachment {
constructor(arg0: $InhibitorAttachmentItem$$Type, arg1: $CompoundTag$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttachedInhibitor$$Type = ($AttachedInhibitor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AttachedInhibitor$$Original = $AttachedInhibitor;}
declare module "dev.technici4n.moderndynamics.attachment.RenderedAttachment" {
import {$List} from "java.util.List"

export class $RenderedAttachment {
readonly "id": StringJS

constructor(arg0: StringJS)

public static "getAttachmentIds"(): $List<(StringJS)>
public static "getAllAttachments"(): $List<($RenderedAttachment)>
public "getStuffed"(): $RenderedAttachment
public static get "attachmentIds"(): $List<(StringJS)>
public static get "allAttachments"(): $List<($RenderedAttachment)>
get "stuffed"(): $RenderedAttachment
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderedAttachment$$Type = ($RenderedAttachment);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderedAttachment$$Original = $RenderedAttachment;}
