declare module "me.chrr.camerapture.item.AlbumItem" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$List} from "java.util.List"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Item} from "net.minecraft.world.item.Item"
import {$ResourceKey} from "net.minecraft.resources.ResourceKey"

export class $AlbumItem extends $Item {
static "SLOTS": integer
static "PAGES": integer
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static "ITEMS_PER_PAGE": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "ID": $ResourceLocation
static readonly "KEY": $ResourceKey<($Item)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public static "getPictures"(album: $ItemStack$$Type): $List<($ItemStack)>
public "use"(world: $Level$$Type, player: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlbumItem$$Type = ($AlbumItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AlbumItem$$Original = $AlbumItem;}
declare module "me.chrr.camerapture.item.PictureItem$PictureData" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Record} from "java.lang.Record"

export class $PictureItem$PictureData extends $Record {
static "CODEC": $Codec<($PictureItem$PictureData)>
static "PACKET_CODEC": $StreamCodec<($ByteBuf), ($PictureItem$PictureData)>

constructor(id: $UUID$$Type, creator: StringJS, timestamp: long)

public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "id"(): $UUID
public "timestamp"(): long
public "creator"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PictureItem$PictureData$$Type = ({"id"?: $UUID$$Type, "creator"?: StringJS, "timestamp"?: long}) | ([id?: $UUID$$Type, creator?: StringJS, timestamp?: long]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PictureItem$PictureData$$Original = $PictureItem$PictureData;}
declare module "me.chrr.camerapture.item.CameraItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$CameraItem$HeldCamera} from "me.chrr.camerapture.item.CameraItem$HeldCamera"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item} from "net.minecraft.world.item.Item"
import {$ResourceKey} from "net.minecraft.resources.ResourceKey"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $CameraItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "ID": $ResourceLocation
static readonly "KEY": $ResourceKey<($Item)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public static "canTakePicture"(player: $Player$$Type): boolean
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, entity: $Entity$$Type, slot: integer, selected: boolean): void
public static "getPaperInInventory"(player: $Player$$Type): integer
public static "find"(player: $Player$$Type, shouldBeActive: boolean): $CameraItem$HeldCamera
public "use"(world: $Level$$Type, player: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "isActive"(stack: $ItemStack$$Type): boolean
public static "setActive"(stack: $ItemStack$$Type, active: boolean): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CameraItem$$Type = ($CameraItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CameraItem$$Original = $CameraItem;}
declare module "me.chrr.camerapture.item.CameraItem$HeldCamera" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Record} from "java.lang.Record"

export class $CameraItem$HeldCamera extends $Record {
constructor(stack: $ItemStack$$Type, hand: $InteractionHand$$Type)

public "stack"(): $ItemStack
public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "hand"(): $InteractionHand
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CameraItem$HeldCamera$$Type = ({"stack"?: $ItemStack$$Type, "hand"?: $InteractionHand$$Type}) | ([stack?: $ItemStack$$Type, hand?: $InteractionHand$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CameraItem$HeldCamera$$Original = $CameraItem$HeldCamera;}
declare module "me.chrr.camerapture.item.PictureItem" {
import {$PictureItem$PictureData} from "me.chrr.camerapture.item.PictureItem$PictureData"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$UUID$$Type} from "java.util.UUID"
import {$List$$Type} from "java.util.List"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$ResourceKey} from "net.minecraft.resources.ResourceKey"

export class $PictureItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "ID": $ResourceLocation
static readonly "KEY": $ResourceKey<($Item)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public static "getPictureData"(stack: $ItemStack$$Type): $PictureItem$PictureData
public "appendHoverText"(stack: $ItemStack$$Type, context: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
public "useOn"(context: $UseOnContext$$Type): $InteractionResult
public static "create"(creator: StringJS, uuid: $UUID$$Type): $ItemStack
public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "getTooltip"(textConsumer: $Consumer$$Type<($Component)>, stack: $ItemStack$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PictureItem$$Type = ($PictureItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PictureItem$$Original = $PictureItem;}
