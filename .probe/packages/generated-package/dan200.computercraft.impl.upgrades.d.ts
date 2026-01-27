declare module "dan200.computercraft.impl.upgrades.TurtleToolSpec" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$TurtleToolDurability, $TurtleToolDurability$$Type} from "dan200.computercraft.api.turtle.TurtleToolDurability"
import {$Record} from "java.lang.Record"

export class $TurtleToolSpec extends $Record {
static readonly "DEFAULT_DAMAGE_MULTIPLIER": float
static readonly "CODEC": $MapCodec<($TurtleToolSpec)>

constructor(adjective: $Component$$Type, item: $Item$$Type, damageMultiplier: float, allowEnchantments: boolean, consumeDurability: $TurtleToolDurability$$Type, breakable: ($TagKey$$Type<($Block$$Type)>)?)

public "damageMultiplier"(): float
public "consumeDurability"(): $TurtleToolDurability
public "adjective"(): $Component
public "allowEnchantments"(): boolean
public "item"(): $Item
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "breakable"(): $Optional<($TagKey<($Block)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TurtleToolSpec$$Type = ({"consumeDurability"?: $TurtleToolDurability$$Type, "item"?: $Item$$Type, "breakable"?: ($TagKey$$Type<($Block$$Type)>)?, "damageMultiplier"?: float, "allowEnchantments"?: boolean, "adjective"?: $Component$$Type}) | ([consumeDurability?: $TurtleToolDurability$$Type, item?: $Item$$Type, breakable?: ($TagKey$$Type<($Block$$Type)>)?, damageMultiplier?: float, allowEnchantments?: boolean, adjective?: $Component$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TurtleToolSpec$$Original = $TurtleToolSpec;}
