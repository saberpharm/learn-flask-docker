"""empty message

Revision ID: 5c8b0672b30f
Revises: e60c454ae0a1
Create Date: 2020-02-20 15:18:08.636984

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '5c8b0672b30f'
down_revision = 'e60c454ae0a1'
branch_labels = None
depends_on = None


def upgrade():
    def upgrade():
        # ### commands auto generated by Alembic - please adjust! ###
        op.add_column('users', sa.Column('admin', sa.Boolean(), nullable=True))
        op.execute('UPDATE users SET admin=False')
        op.alter_column('users', 'admin', nullable=False)
        # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('users', 'admin')
    # ### end Alembic commands ###
