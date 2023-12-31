import React from 'react'
import './Paragraph.css'


function Paragraph() {
    return (
        <div className='paragraph-container'>
            <h4>Ship building</h4>

            <div></div>
            <p> Welcome to Starship Scramble! Prepare to unleash your creativity and engineering skill as you design and construct a battleship and survive through enemies' attack.
                As a player, you are given with a vast array of modules, weapons, tune-up and crews, the possibilities are limitless. We will discuss more on those tools below.
            </p>

            <div className='divider'></div>

            <h4>Modules & Weapons</h4>
            <p>To build a larger ship, you need attachment ports which are provided by CONNECTOR modules. And since you are more likely to get hit with bigger ship, connectors also provide you with bonus maximum hull point.</p>
            <img src={process.env.PUBLIC_URL +'/GameDemo/Feature_1.png'} alt="connector" />

            <p>The second most crucial component in expansion is POWER GENERATOR. Many other modules require power to perform, therefore, you will need to keep this stat in mind when designing the ship.
                I don't plan for them to be complicated and therefore, they have no functions outside of providing power to run the ship.
            </p>
            <img src={process.env.PUBLIC_URL +'/GameDemo/Feature_2.png'} alt="power generator" />
            
            <p>There are a lots of unique modules that perform different tasks. However, I think players should experience those for themselves and will focus on THRUSTERS.
                Thruster generally increases weightload and movementspeed, however, each thruster has various passive that improves driving performance differently. You need to keep in mind, each mainship has a capacity of thrusters, you can exceed the capacity but the effect is reduced. 
                Load a lots of them and you move faster than your own bullets.
            </p>
            <img src={process.env.PUBLIC_URL +'/GameDemo/Feature_3.png'} alt="power generator" />
            <p>Now let's start the fun part, weapons! There are currently 9 categories of weapons, I would leave examples below.</p>
            
            <h5>Physical Weapon</h5>
            <p>As the basic type in the game, physical weapons focus on dealing damage. However, they have certain gimmicks of their own such as multiples cannons, burst of projectiles, homing missles, explosion and much more...</p>
            <p>There are melee weapons in this class, and due to the range disadvange, they deals insane damage in a large area. Somes have specialty such as Great Stars would swing arround, or Savage Edge would destroy hostile projectiles.  </p>
            <img src={process.env.PUBLIC_URL +'/GameDemo/Feature_4.png'} alt="physical weapons" />
            
            <h5>Chemical Weapon</h5>
            <p>Chemical weapons deal chemical damage and apply defence reduction on targets. Most weapons from this class prioritize on apply debuff on multiple targets or stacking them.
                As a result, they have good Area of Effect or spreading projectiles or piercing power.
            </p>
            <img src={process.env.PUBLIC_URL +'/GameDemo/Feature_5.png'} alt="chemical weapons" />

            <h5>Electrical Weapon</h5>
            <p>Electrical weapons deal energy damage and zap nearby enemies. Zap damage scales with the current weapon damage. They require lots of energy and have large range as well as projectile speed. Futhermore, they vary alot in different type of attack. For example, Shock cannon fire a slow projectile that constantly zaps nearby targets or the impaling attack of lightning spear, zaps all enemies it touch and nearby as well.</p>
            <p>This is my favourite weapon type, from zapping visual from all over the screen. It is just refreshing seeing them in action.</p>
            <img src={process.env.PUBLIC_URL +'/GameDemo/Feature_6.png'} alt="electrical weapons" />

            <h5>Magnetic Weapon</h5>
            <p>Magnetic or Magnetized weapons specialize on disposition enemies in an area. They are the main support class of weapons and do not deal much damage. Gravity Artillery drags all enemies affected to the center, then an aoe attack would cause a devastating impact on the enemies assault.
                Or if you play melee, you can utilize the Hook to drag target in range.
            </p>
            <p>This type gave me the most of problems during development, I did not have the vfx or a good reference on vfx at first, Moreover, I also got couples of issue with 2d physics in the game engine. However, I am glad with the current result. </p>
            <img src={process.env.PUBLIC_URL +'/GameDemo/Feature_7.png'} alt="magnetic weapons" />

            <h5>Quantum Weapon</h5>
            <p>Also know as light weapon, they possess ability to penetrate enemies and deal damage as long as projectiles fly. Most weapons don't simply deal damage by shooting and their penetration property are expanded further. 
                Morning Star projectiles will return to the weapon or Ardent Blazer release 2 side projectiles each time hitting a target. There are so much more that I can't wait for player to try!</p>
            <p>The main downside is this type costs a fortune for purchasing as well as operation, but they would surely worth your investment. </p>
            <img src={process.env.PUBLIC_URL +'/GameDemo/Feature_8.png'} alt="quantum weapons" />

            <h5>Sonic Weapon</h5>
            <p>Sonic weapons' most crucial property is bouncing, by simply twisting certain attributes I managed to obtain various trait, for examble, adding a delay before bouncing the projectile may pierce through target before changing direction or explosion on each bounce or release minor projectiles.</p>
            <p>They have a limit on the amount of bouncing and chance of surprise is lower than quantum. All and all, they are decent and probably noisy.</p>
            <img src={process.env.PUBLIC_URL +'/GameDemo/Feature_9.png'} alt="sonic weapons" />

            <h5>Energy Weapon</h5>
            <p>This class is similar to physical weapon but deal energy damage. They are the classic type and mainly focus on damage.
            </p>
            <p>I mostly pick monochromatic color for vfx to not confuse players, however, at the point of developping this type, I had ran out of color and decided to pick other choice. The color is so gooooooood!

            </p>
            <img src={process.env.PUBLIC_URL +'/GameDemo/Feature_10.png'} alt="energy weapons" />

            <h5>Unclassified Weapon</h5>
            <p>This group actually contain multiple minor classified types such as Thermal, or Cryogenic weapons, but there not many instances of weapons to call them a group.
                Thermal weapons apply enhance latter energy attack, Cryogenic weapons slow down enemies and EMP weapons deals triple damage to shield.
                Oh wait! There is also another class, vanguard weapons that only activate at certain speed, and it's damage heavily scale with the current moving speed. CHARGEEEE!
            </p>
            <p>
                Vanguard is extremely fun, and they also knock enemies a side, but you couldn't rotate during the charging since the speed would be slown down.
            </p>

            <img src={process.env.PUBLIC_URL +'/GameDemo/Feature_11.png'} alt="energy weapons" />

            <h5>Drone Factory</h5>
            <p>
                A wise man once said:" I'm weak but my comrades are crowed"... Anyway, feel the swarm!.

            </p>
            <p>
                There are different types of drones, they can do a lot of tricks, such as melee attack, range attack, status effect, slow or block incoming projectiles and they can sacrify for you as well.
                There are a limitation for amount of drones each factory can produce at a time but there is no cap on the amount of drones in the battle field so dry your juice out to build the most of them.
            </p>
            <img src={process.env.PUBLIC_URL +'/GameDemo/Feature_12.png'} alt="energy weapons" />

            <p>Phew! That is a lot, but it is merely a portion modules and weapons that is currently in the game.</p>
            
            
            <div className='divider'></div>
            <h4>Crews</h4>
            <p> Crews function as the general upgrade of the starship. You can recruit new crew by rescuing them on scattered aesteroids.
                There are no limit on how many you can rescue each wave therefore, optimize as you wish.
                There are rankings for all of them, the stronger the rare you are likely to find.
            </p>
            <p>Since "Crews rescue" can be intimidating, crew individually is fairly weak, thus not stressing players to rush for crew.</p>
            <img src={process.env.PUBLIC_URL +'/GameDemo/Feature_13.png'} alt="crew selection" />
           
            <div className='divider'></div>

            <h4>Tune-Up</h4>
            <p>A mechanic with an objective of improving weapons and enriching the customization of the starship.
                 Basically, a tune-up item provides a specific stat for connected weapon. 
                 The fun thing is combining two tune ups items result in an advanced tune-up with a special effect.
                There are 7 basic tune-up items and 28 combined items.

            </p>
            <p>Special effects can make a major difference in different weapons.
                 For instance, "Hurricane Cannon" fires an addional projectile that applies on-hit effect of the attached weapon such as explosion,
                  it also applies the zap effect that is unique to electricity weapon. 
                
            </p>

            <img src={process.env.PUBLIC_URL +'/GameDemo/TuneUp_1.png'} alt="tune-up" />
            <img src={process.env.PUBLIC_URL +'/GameDemo/TuneUp_2.png'} alt="tune-up sketch" />
            <img src={process.env.PUBLIC_URL +'/GameDemo/TuneUp_3.png'} alt="tune-up sketch" />
            <p>Furthermore, I have built the system for drag and drop, combination, apply stats and tooltips.
                The UX/UI is an extended version of the module build UI, belows are the important criteria I took into consideration during development of this mechanic user interface.
            </p>
            <li>Isolate weapons from other modules from view.</li>
            <li>Players must be able to view what weapons at what position.</li>
            <li>Each weapon has 3 slots of tune ups and slots' occupancy must be visible.</li>
            <li>There must be a notification on purchasing new tune-up items.</li>
            <li>Tooltips must display the combination formulas and players are able to view the potential combination, before committing combination. </li>

            <img src={process.env.PUBLIC_URL +'/GameDemo/TuneUp_4.png'} alt="tune-up sketch" />
            <p>This mechanic deepens the customization experience for Starship Scramble with various options and thought-provoking consideration but not too complicated.
                It might appear difficult to memorize all the combinations and way to using them, therefore, I have designed the UI carefully to support players in this system. </p>

            <div className='divider'></div>

            <h4>Combat Mode</h4>
            <p>Combat Mode is a fun way to reward or punish player playstyles. 
                <br />
                <br />
                For example, having too many advanced weapons result in high heat accumulation, this leads to overheat, your firepower is stronger but ship takes way more damage.
                <br />
                <br />
                Or for maybe you are too good! by kill 15 enemies without taking damage, you enter battle fever, enhance your critical power and dodge, but you lose the bonus after taking damage.
                <br />
                <br />
                Lastly, there is stationary mode, you enter this mode by staying still for 5 seconds, Ship will project a psyic shield that reduce incoming damage by inverse heat (simply, lower heat, lower damage taken)
                This shield even scales with the amount of weapons you are currently having. </p>
                <br />

            <h4>Collection & Progression</h4>
            <p>You may have seen various orefields scattered on the map. They are resource that you can collect.
                You will return to base where you can put those resource to good use. Construct new buildings or unlock new modules or some permanent upgrades!
            </p>
            <p>
                You will drop your crews at base, that's why you rescue the in the first place right?!
                And Building are the means to support the incoming crews. However, this is only a minor feature that provides a sense of community, home and progression.
                Therefore, this feature is totally optional and stress-free.
                I personally have grinding for resource, I would consider to minize the amount of run players have to finish all upgrades.
            </p>
            <img src={process.env.PUBLIC_URL +'/GameDemo/Feature_15.png'} alt="base attribute" />
            <img src={process.env.PUBLIC_URL +'/GameDemo/Feature_16.png'} alt="construct building" />

            <p>There's still a ton to uncover in Starship Scramble, but you need to wander a little yourself. See you outer space!!!</p>
            <div className='divider'></div>
        </div>
    )
}

export default Paragraph